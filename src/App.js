import { PaperProvider, Text, TextInput, Button } from 'react-native-paper';
import { View } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [mostrarViews, setMostrarViews] = useState(false);

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

  const estil = 'upv';

  const isAdmin = true;

  const moduls2Dam = [
    { nom: 'DIN', professor: 'Manel', hores: 120 },
    { nom: 'ADA', professor: 'Roberto', hores: 120 },
    { nom: 'PMDM', professor: 'Paco', hores: 100 },
    { nom: 'PSP', professor: 'Roberto', hores: 60 },
    { nom: 'SGE', professor: 'Belén', hores: 100 },
    { nom: 'Anglés', professor: 'Caterina', hores: 40 },
    { nom: 'EIE', professor: 'Ana', hores: 60 },
  ];

  const ferViewsVisibles = () => {
    setMostrarViews(!mostrarViews);
  }

  const nom = (textAMostrar, estilText) => {
    return (
      <Text style={estilText}>{textAMostrar}</Text>
    );
  };

  const dades = (arrayElements, estil, stylesContainer) => {
    return (
      <View style={estil === 'florida' ? stylesContainer.florida : stylesContainer.upv}>
        {arrayElements.map((elem, pos) => (
          <TextInput
            label='Introdueix les teues dades'
            key={pos}
            placeholder={elem}
            placeholderTextColor={estil === 'florida' ? 'white' : 'orange'}
            textColor={estil === 'florida' ? 'white' : 'orange'}
            left={<TextInput.Icon icon="eye" />}
          ></TextInput>
        ))}
      </View>
    );
  };

  const button = (isAdmin) => {
    return (
      isAdmin &&
      <Button
        icon='format-list-bulleted'
        mode='contained'
        buttonColor='#6200ee'
        style={{ borderRadius: 5 }}
        onPress={ferViewsVisibles}
      >INFORMES</Button>
    );
  };

  const llistat = (array) => {
    return (
      mostrarViews &&
      array.map((elem, pos) => (
        <View
          key={pos}
          style={{ backgroundColor: pos % 2 == 0 ? '#F48FB1' : '#F8BBD0'}}
        >
          <Text>{pos + 1}</Text>
          <Text>{elem.nom}</Text>
          <Text>{elem.professor}</Text>
          <Text>{elem.hores}</Text>
        </View>
      ))
    );
  };

  return (
    <PaperProvider>
      <View>
        {nom("Ausiàs", estilText)}
      </View>
      {dades(elemsTextInput, estil, styles)}
      <View>
        {button(isAdmin)}
      </View>
      {llistat(moduls2Dam)}
    </PaperProvider>
  );
}

export default App;