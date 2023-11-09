import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';

import Footer from '../components/footer';
import estilos from '../estilos/midiaPesquisada';

const API_KEY = 'a7c8f3e436b89729fc0f9d797ee42c55';
const img_url = 'https://image.tmdb.org/t/p/w500';

export default function MidiaPesquisada() {
  const [filmes, setFilmes] = useState([]);
  const [series, setSeries] = useState([]);
  const [pesquisado, setPesquisado] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const parametroPesquisado = route.params.pesquisado;

  useEffect(() => {
    if (parametroPesquisado) {
      setPesquisado(parametroPesquisado);
      pesquisarMidias(parametroPesquisado);
    }
  }, [parametroPesquisado]);

  const pesquisarMidias = async (query) => {
    try {
      // Requisição para filmes
      const filmeResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const filmesData = filmeResponse.data.results;

      // Requisição para séries
      const serieResponse = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${query}`
      );
      const seriesData = serieResponse.data.results;

      setFilmes(filmesData);
      setSeries(seriesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePesquisar = () => {
    pesquisarMidias(pesquisado);
  };

  const handleHome = () => {
      navigation.navigate('PaginaPrincipal')
  }

  const handleMidias = () => {
      navigation.navigate('InfosMidias')
  }

  return (
    <ScrollView>
      <View style={estilos.container}>
        <View style={estilos.topo}>
          <TouchableOpacity onPress={handleHome}>
            <Image style={estilos.img} source={require('../assets/logo.png')} />
          </TouchableOpacity>
          <View style={estilos.areaPesquisa}>
            <TextInput
              placeholder="Pesquise por título"
              value={pesquisado}
              onChangeText={(text) => setPesquisado(text)}
            />
            <TouchableOpacity onPress={handlePesquisar}>
              <Image style={estilos.lupa} source={require('../assets/lupa.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={estilos.main}>
          {filmes.length > 0 && (
            <>
              {series.map((serie) => (
                <View style={estilos.infos} key={serie.id}>
                  <Image
                    style={estilos.imgMidias}
                    source={{ uri: `${img_url}${serie.backdrop_path}` }}
                  />
                  <View style={estilos.areaInfosMidia}>
                    <Text style={estilos.texto}>{serie.name}</Text>
                    <Text style={estilos.texto}>Tipo: Série</Text>
                    <Text style={estilos.texto}>Nota: {serie.vote_average.toFixed(1)}</Text>
                    <TouchableOpacity onPress={handleMidias} style={estilos.botao}>
                      <Text style={estilos.textoInfo}>Mais Informações</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </>
          )}
          {series.length > 0 && (
            <>
              {filmes.map((filme) => (
                <View style={estilos.infos} key={filme.id}>
                  <Image
                    style={estilos.imgMidias}
                    source={{ uri: `${img_url}${filme.backdrop_path}` }}
                  />
                  <View style={estilos.areaInfosMidia}>
                    <Text style={estilos.texto}>{filme.title}</Text>
                    <Text style={estilos.texto}>Tipo: Filme</Text>
                    <Text style={estilos.texto}>Nota: {filme.vote_average.toFixed(2)}</Text>
                    <TouchableOpacity onPress={handleMidias} style={estilos.botao}>
                      <Text style={estilos.textoInfo}>Mais Informações</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </>
          )}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}