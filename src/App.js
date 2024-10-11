import { PaperProvider, Text, TextInput } from 'react-native-paper';
import { useState } from 'react';

const App = () => {
  const elemsTextInput = [
    'Email',
    'Nom'
  ]

  const estilText = {
    fontWeight: 'bold',
    color: '#13802e',
    fontSize: 35,
  };

  const dades = (arrayElements) => {
    return (
      arrayElements.map((elem, pos) => (
        <TextInput label={elem} key={pos} placeholder={elem}></TextInput>
      ))     
    );
  }

  const nom = (textAMostrar, estilText) => {
    return (
      <Text style={estilText}>{textAMostrar}</Text>
    );
  }

  return (
    <PaperProvider>
      {nom("Ausiàs", estilText)}
      {dades(elemsTextInput)}
    </PaperProvider>
  );
}

export default App;