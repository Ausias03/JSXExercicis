import { PaperProvider, Text, Switch } from 'react-native-paper';

const App = () => {
  const nom = () => {
    return (
      <Text variant='displayLarge'>Ausiàs</Text>
    );
  }

  return (
    <PaperProvider>
      {nom()}
    </PaperProvider>
  );
}

export default App;