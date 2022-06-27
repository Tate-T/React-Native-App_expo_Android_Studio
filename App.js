import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "RobotoRegular": require("../assets/fonts/Roboto-Regular.ttf"),
//     "RobotoMedium": require("../assets/fonts/Roboto-Medium.ttf"),
//   });
// };

export default function App() {
  const routing = useRoute(null);
  // const [isReady, setIsReady] = useState(false);

  // if (!isReady) {
  //   setIsReady(true)
  //   return (
  //     loadFonts()
  //     // <AppLoading
  //     //     startAsync={loadFonts}
  //     //     onFinish={() => setIsReady(true)}
  //     //     onError={console.warn}
  //     // />
  //   );
  // }

  return (
    <NavigationContainer style={styles.container}>
      {routing}
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
