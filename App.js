import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import MainScreen from './Screens/MainScreen';
import * as Font from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "RobotoRegular": require("../assets/fonts/Roboto-Regular.ttf"),
//     "RobotoMedium": require("../assets/fonts/Roboto-Medium.ttf"),
//   });
// };


const AuthStack = createNativeStackNavigator();

export default function App() {

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
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Main'
          component={MainScreen} />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Login'
          component={LoginScreen} />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name='Registration'
          component={RegistrationScreen} />
      </AuthStack.Navigator>
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
