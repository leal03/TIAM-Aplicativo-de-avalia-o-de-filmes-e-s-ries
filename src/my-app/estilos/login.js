import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#0f1c2b',
    },
    posicaoImagem: {
        padding: 0,
        margin: 0,
        width: '100%',
        height: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Imagem: {
        width: 400
    },
    inputs: {
        display: 'flex',
        gap: 30,
        width: '70%',
        height: 200,
    },
    inputEmail: {
        color: 'white',
        placeholderTextColor: 'white',
        backgroundColor: '#353535',
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
    },
    inputUsuario: {
        color: 'white',
        placeholderTextColor: 'red',
        backgroundColor: '#353535',
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
    },
    inputSenha: {
        color: 'white',
        backgroundColor: '#353535',
        height: 50,
        borderRadius: 20,
        textAlign: 'center',
        placeholderTextColor: 'green'
    },
    botaoCriarConta: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        height: 60,
        borderRadius: 50,
        backgroundColor: '#002c84'
    }
})