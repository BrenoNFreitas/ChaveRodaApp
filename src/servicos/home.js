import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

import firebase from 'firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {

  this.setState = { 
    displayName: firebase.auth().currentUser.displayName,
    uid: firebase.auth().currentUser.uid
  }

  return (
      <View style={estilo.container}>

        <div style={estilo.formatoInicio}>

          <Text style={estilo.textoInicio}>Escolha seu Serviço</Text>

        </div>

        <View style={estilo.containerCard}>
      <div style={estilo.org}> 
        <div style={estilo.card}>
          <Image source={require('../../assets/toro.png')} style={estilo.image} />
          <Text style={estilo.titulo}> CARROS </Text>
          <div style={estilo.descricao}>
          <Text style={estilo.paragrafo}> Serviços especializados para o seu Carro somente aqui </Text>
          </div>
          <div style={estilo.botaoRight}>
          <TouchableOpacity style={estilo.btn} onPress={ () => this.props.navigation.navigate('AtdmCarro')} >Saiba mais</TouchableOpacity> 
          </div>
        </div>

        <div style={estilo.card}>
          <Image source={require('../../assets/xre300.png')} style={estilo.image} />
          <Text style={estilo.titulo}> MOTOCICLETAS </Text>
          <div style={estilo.descricao}>
          <Text style={estilo.paragrafo}> Serviços especializados para a sua Motocicleta somente aqui </Text>
          </div>
          <div style={estilo.botaoRight}>
            <TouchableOpacity style={estilo.btn} onPress={ () => this.props.navigation.navigate('AtdmMoto')} >Saiba mais</TouchableOpacity> 
          </div>
        </div>

        <div style={estilo.card}>
          <Image source={require('../../assets/bicicletacaloi.png')} style={estilo.image} />
          <Text style={estilo.titulo}> BICICLETAS </Text>
          <div style={estilo.descricao}>
            <Text style={estilo.paragrafo}> Serviços especializados para a usa Bicicleta somente aqui </Text>
          </div>
          <div style={estilo.botaoRight}>
            <TouchableOpacity style={estilo.btn} onPress={ () => this.props.navigation.navigate('AtdmBike')} >Saiba mais</TouchableOpacity> 
          </div>
        </div>

        <div style={estilo.card}>
          <Image source={require('../../assets/caminhao.png')} style={estilo.image} />
          <Text style={estilo.titulo}> CAMINHÕES </Text>
          <div style={estilo.descricao}>
            <Text style={estilo.paragrafo}> Serviços especializados para o seu Caminhão somente aqui </Text>
          </div>
          <div style={estilo.botaoRight}>
            <TouchableOpacity style={estilo.btn} onPress={ () => this.props.navigation.navigate('AtdmDiversos')} >Saiba mais</TouchableOpacity> 
          </div>
        </div>
      </div>
    </View>

        <div style={estilo.formato}>

          <TouchableOpacity style={estilo.botao} onPress={() => this.signOut()}> 
          <Text style={estilo.textoBotao}> Voltar </Text> 
          </TouchableOpacity>
          
        </div>

        </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b3652',
  },

  containerCard: {
    backgroundColor: '#1b3652',
    flexWrap: 'wrap',
    flex: '1px',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
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

  org:{
    display: 'contents',
  },

  card:{
    backgroundColor: '#fff',
    width: '170px',
    height: '230px',
    border: '5px solid #000',
    padding: '5px',
    borderRadius: '20px',
    margin: '16px',

    alignItems: 'center',
  },

  titulo:{
    fontSize: '18px',
    lineHeight: '54px',
    color: '#000',
  },

  descricao:{
    textAlign: 'center',
    marginTop: '-11px',
  },

  paragrafo:{
    color: 'grey',
  },

  image: {
    marginRight: '24px',
    width: '170px',
    height: '100px',
    borderRadius: '10px',
  },

  btn:{
    color: '#000',
    backgroundColor: '#f3cd74',
    textAlign: 'center',
    width: '100px',
    borderRadius: '5px',
    marginTop: '10px',
    marginLeft: '65px',
  },

  textoBotao:{
    color:'#1b3652',
    fontSize:22,
    fontWeight:'bold'
  },

  formato:{
    alignSelf:'center',
    margin:2,
    display:'grid',

  },

  botao:{
    backgroundColor: 'white',
    width:'150px',
    height:'40px',
    justifyContent:'center',
    alignItems:'center',
    fontSize: 22,
    lineHeight: 15,
    borderRadius:'15px',
    margin: 10,
    color:'#000',
  },

});