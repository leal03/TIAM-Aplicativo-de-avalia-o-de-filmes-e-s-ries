import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

import estilos from '../estilos/cadastro'
export default function cadastro() {
    return(
        <View style={estilos.container}>
            <View style={estilos.posicaoImagem}>
                <Image style={estilos.Imagem} source={require('../assets/logo.png')} />
                <View style={estilos.inputs}>
                    <TextInput style={estilos.inputEmail}
                    placeholder='E-mail'
                    />
                    <TextInput style={estilos.inputUsuario}
                    placeholder='Usuario'
                    />
                    <TextInput style={estilos.inputSenha}
                    placeholder='Senha'
                    />
                </View>
                <TouchableOpacity style={estilos.botaoCriarConta}>
                    <Text>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}