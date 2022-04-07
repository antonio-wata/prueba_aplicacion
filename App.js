/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 
 import React from 'react';
 import { 
   Text, 
   View, 
   StyleSheet, 
   Button,
   TextInput, 
   SafeAreaView,
   ScrollView,
  } from 'react-native';
 
 
  const HelloWorldApp = () => {
  const [titleText] = "Formulario";
  const [nombre, onChangeText] = React.useState(null);
  const [email, asdf] = React.useState(null);
  const [telefono, onChengeTel] = React.useState(null);
  
  const Hi = () => <Text>ASDF Hello!!</Text>; 
  
  return (
    <View style={container}>
    <SafeAreaView>
    <ScrollView>
    <Text style={styles.baseText}>Formulario</Text>
        <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={nombre}
        placeholder="Nombre"
        />
        <Hi/>
        <TextInput 
        style={styles.input}
        onChangeText={asdf}
          value={email}
          placeholder="email"
          />
          <TextInput 
          style={styles.input}
          onChangeText={onChengeTel}
          value={telefono}
          placeholder="email"
          />
          
          <ScrollView style={styles.scrollView}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            </ScrollView>
            </ScrollView>
     </SafeAreaView>
     </View>
   )
  }
  
  const styles = StyleSheet.create({
    fondo: {
      backgroundColor:'#fff123',
      color: '#2854AF'
    },
    baseText: {
      fontFamily: "Arial",
    },
    input: {
      borderWidth: 1,
      margin: 10,
    },
    scrollView: {
      backgroundColor: 'red',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    
  });

  const page = StyleSheet.create({
    container:{
      backgroundColor: '#61dafb',
    }
  });
  
  const container = StyleSheet.compose(page.container)
  
  constructor(props){
    
  }

  export default HelloWorldApp;
  
  */


import React from "react";
import {StyleSheet, Text, View, FlatList} from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      loading: false,
      pokemon: [],
      url: 'http://ec2-18-219-129-163.us-east-2.compute.amazonaws.com:8088/rh/expedientes-personales/antonio-cesar-alvarez-garcia',
    }
  }

  //Se ejecuta despues de que los componentes se monten
  componentDidMount(){
    this.getPokemon();
  }

  getPokemon = () => {
    this.setState({loading:true});
    
    //funcion que nos permite hacer peticiones
    fetch(
      this.state.url,
      {
        method: 'POST',
        headers:{'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify({'login':'antonio.alvarez', 'password':'antonio.alvarez'}),
      },
      )
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      this.setState({loading:false});
      console.log(response);

      this.state.url = 'http://ec2-18-219-129-163.us-east-2.compute.amazonaws.com:8088/rh/expedientes-personales/antonio-cesar-alvarez-garcia';
    });
  };


  render(){
    if(this.state.loading){
      return(
        <View>
          <Text>Iniciando...</Text>
        </View>
      );
    }
    return(
      <View>
        <Text>Usuario logeado</Text>
      </View>
    );
  }

}

