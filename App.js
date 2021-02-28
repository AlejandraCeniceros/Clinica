import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import image from './assets/LogoPongui.png'

const App =() => {
  return (
    <View style ={styles.container}>
      <Text style ={styles.title}>Clinica de Fisioterapia</Text>
      <Image 
      source={image}
      style ={styles.image}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('Hello"""')}
        style={styles.btn}
      >
        <Text style={styles.btnText }>Iniciar sesión : Fisioterapeuta</Text>
      </TouchableOpacity>
      

      <Text style={styles.text }> ó</Text>

      <TouchableOpacity
        onPress={() => Alert.alert('Hello"""')}
        style={styles.btn}
      >
        <Text style={styles.btnText }>Iniciar sesión : Biomédico</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: { 
    flex: 1,
    justifyContent : "center",
    alignItems: 'center',
    backgroundColor: "#292929",
  },
  title : {fontSize: 25, color: "#fff"},
  image: {height : 150, width: 150, borderRadius:90},
  btn: {
    backgroundColor: "#228b22",
    padding: 7,
    marginTop :50,
  },
  btnText:{
    color: "#fff",
    fontSize: 20,
  },
  text : {fontSize: 25, color: "#fff", marginTop:20},



});

export default App;
