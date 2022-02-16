import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { Main } from './src/main';
import { 
  useFonts, 
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black
 } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Inter_900Black 
  });

  if(!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <>
      <StatusBar style="light" translucent={true} />
      <Main />
    </>
  );
}

