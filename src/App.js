import { PaperProvider, Text, Switch } from 'react-native-paper';

const App = () => {
  const estilText = {
    fontWeight: 'bold',
    color: '#13802e',
    fontSize: 40,
  };

  const nom = (textAMostrar, estilText) => {
    return (
      <Text style={estilText}>{textAMostrar}</Text>
    );
  }

  return (
    <PaperProvider>
      {nom("Ausiàs", estilText)}
    </PaperProvider>
  );
}

export default App;