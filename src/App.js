import { PaperProvider, Text, Switch } from 'react-native-paper';

const App = () => {
  const nom = (textAMostrar) => {
    return (
      <Text variant='displayLarge'>{textAMostrar}</Text>
    );
  }

  return (
    <PaperProvider>
      {nom("Ausiàs")}
    </PaperProvider>
  );
}

export default App;