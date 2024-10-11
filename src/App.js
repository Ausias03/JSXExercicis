import { PaperProvider, Text, TextInput } from 'react-native-paper';

const App = () => {
  const estilText = {
    fontWeight: 'bold',
    color: '#13802e',
    fontSize: 40,
  };

  const dades = () => {
    return (
      <TextInput></TextInput>
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
      {dades()}
    </PaperProvider>
  );
}

export default App;