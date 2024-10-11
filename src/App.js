import { PaperProvider, Text, TextInput } from 'react-native-paper';
import { View } from 'react-native';
import { useState } from 'react';

const App = () => {
  const elemsTextInput = [
    'Email',
    'Nom'
  ];

  const estilText = {
    fontWeight: 'bold',
    color: '#13802e',
    fontSize: 35,
  };

  const styles = {
    upv: {
      backgroundColor: 'purple',
      fontSize: 10,
      fontWeight: '600',
      padding: 4,
      paddingLeft: 12,
      textAlign: 'left',
      color: 'grey',
    },
    florida: {
      backgroundColor: 'red',
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    }
  };

  const estil = 'florida';

  const dades = (arrayElements, estil, stylesContainer) => {
    return (
      <View style={estil === 'florida' ? stylesContainer.florida : stylesContainer.upv}>
      {arrayElements.map((elem, pos) => (
        <TextInput
          label={elem}
          key={pos}
          placeholder={elem}
          placeholderTextColor={estil === 'florida' ? 'white' : 'orange'}
          textColor={estil === 'florida' ? 'white' : 'orange'}
        ></TextInput>
        ))}
      </View>
    );
  }

  const nom = (textAMostrar, estilText) => {
    return (
      <Text style={estilText}>{textAMostrar}</Text>
    );
  }

  return (
    <PaperProvider>
      <View>
        {nom("Ausiàs", estilText)}
      </View>
      {dades(elemsTextInput, estil, styles)}
    </PaperProvider>
  );
}

export default App;