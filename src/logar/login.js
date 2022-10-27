import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native'

import firebase from 'firebase';

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  setIt=()=>{
    data = {nome:'Nic',idade:20};
    db =  firebase.firestore();
    res = db.collection('adm').doc('us').set(data);
    Alert.alert(res)
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      alert('Informe seu Email e Senha para Entrar!')
      this.setState({
        isLoading: false,
      })
    } else {
      this.setState({
        isLoading: false,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        alert('Usuário logado com sucesso!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Inicio')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }

  return (
      <View style={styles.container}>

        <div style={styles.formatoInicio}>

          <Text style={styles.textoInicio}>Tela de Login</Text>

        </div>

        <div style={styles.formato}>
        
          <Image source={require('../../assets/logo.png')} style={styles.img} />

        </div>

        <div style={styles.formato}>
          
          <TextInput style={styles.campo} placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />

        </div>

        <div style={styles.formato}>

          <TextInput style={styles.campo} placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        />

        </div>

        <div style={styles.formato}>

          <TouchableOpacity style={styles.botao} onPress={ () => this.userLogin() }> 
          <Text style={styles.textoBotao}> Entrar </Text> 
          </TouchableOpacity>
          
        </div>

        <TouchableOpacity style={styles.campoTexto}
        onPress={ () => this.props.navigation.navigate('Cadastro')}>

          <Text style={styles.campoTxt}>
          Não tem cadastro? Entre com o email
          </Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.campoTexto}
        onPress={ () => this.props.navigation.navigate('EsqueciSenha')}>

          <Text style={styles.campoTxt}>
          Esqueci minha senha
          </Text>

        </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b3652',
  },
  
  textoInicio:{
    color:'#1b3652',
    fontSize:18,
    fontWeight:'bold',
    alignSelf:'center',
  },

  formatoInicio:{
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    display:'grid',
    width:300,
    height:30,
    backgroundColor:'#FFF',
    borderRadius:"0  0 25px 25px ",
  },

  img:{
    width:260,
    height:160,
    margin:30,
    alignItems:'center',
  },

  textoBotao:{
    color:'#1b3652',
    fontSize:22,
    fontWeight:'bold'
  },

  formato:{
    alignSelf:'center',
    margin:15,
    display:'grid',

  },

  campo:{
    width:250,
    height: 50,
    backgroundColor:'white',
    borderRadius:15,
    color:'#1b3652',
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:'10px'
  },

  botao:{
    backgroundColor: 'white',
    width:'150px',
    height:'50px',
    justifyContent:'center',
    alignItems:'center',
    fontSize: 22,
    lineHeight: 15,
    borderRadius:'15px',
    margin: '10px',
    color:'#000',
    marginBottom:90
  },

  campoTexto:{
    marginTop:18,
    alignSelf: "center"
  },
  
  campoTxt:{
    color:"#a1a1a1",
    fontWeight:'bold'
  },

});