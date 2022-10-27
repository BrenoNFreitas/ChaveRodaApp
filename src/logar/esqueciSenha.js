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
    if(this.state.email === '') {
      alert('Informe seu Email para receber o Link!')
      this.setState({
        isLoading: false,
      })
    } else {
      alert('Link enviado com sucesso!')
      this.setState({
          isLoading: false,
          email: '',
        })
      //this.props.navigation.navigate('Login')
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

          <Text style={styles.textoInicio}>Redefinir Senha</Text>

        </div>

        <div style={styles.formato}>
        
          <Image source={require('../../assets/logo.png')} style={styles.img} />

        </div>

        <div style={styles.formato}>
        
          <Text style={styles.textoInfo}> Informe seu email para ser enviado o link de redefinição da senha. </Text>

        </div>

        <div style={styles.formato}>
          
          <TextInput style={styles.campo} placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />

        </div>

        <div style={styles.formato}>

          <TouchableOpacity style={styles.botao} onPress={ () => this.userLogin() }> 
          <Text style={styles.textoBotao}> Entrar </Text> 
          </TouchableOpacity>
          
        </div>

        <div style={styles.formato}>

          <TouchableOpacity style={styles.botao} onPress={ () => this.props.navigation.navigate('Login') }> 
          <Text style={styles.textoBotao}> Voltar </Text> 
          </TouchableOpacity>
          
        </div>

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

  textoInfo:{
    color:'white',
    textAlign: 'center',
    margin: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    maxWidth:250,
  },

  textoBotao:{
    color:'#1b3652',
    fontSize:22,
    fontWeight:'bold'
  },

  formato:{
    alignSelf:'center',
    margin:10,
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
    margin: '5px',
    color:'#000',
  },

});