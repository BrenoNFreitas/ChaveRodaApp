import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/logar/login';
import Cadastro from './src/logar/cadastro'
import EsqueciSenha from './src/logar/esqueciSenha'

import Inicio from './src/servicos/home';

import AtdmCarro from './src/servicos/AtdmCarro'
import AtdmBike from './src/servicos/AtmBike'
import AtdmMoto from './src/servicos/AtmMoto'
import AtdmDiversos from './src/servicos/AtmDiversos'

import firebase from 'firebase'
import firebaseConfig from './database/firebase'

const Stack = createStackNavigator();

function Home(){
  return (
    <Stack.Navigator>
      
      <Stack.Screen name = "Login" component = { Login } options={{ headerShown : false }}/>
      
      <Stack.Screen name = "Cadastro" component = { Cadastro } options={{ headerShown : false }}/>

      <Stack.Screen name = "EsqueciSenha" component = { EsqueciSenha } options={{ headerShown : false }}/> 
      
      <Stack.Screen name = "Inicio" component = { Inicio } options={{ headerShown : false }}/>

      <Stack.Screen name = "AtdmCarro" component = { AtdmCarro } options={{ headerShown : false }}/>

      <Stack.Screen name = "AtdmMoto" component = { AtdmMoto } options={{ headerShown : false }}/>

      <Stack.Screen name = "AtdmBike" component = { AtdmBike } options={{ headerShown : false }}/>

      <Stack.Screen name = "AtdmDiversos" component = { AtdmDiversos } options={{ headerShown : false }}/>
      

    </Stack.Navigator>
  )
}

export default function App(){
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return(
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  )
}