import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';
import { Provider } from 'react-redux';
import { store } from './redux/dashboard/store';
import db from './firebase/config';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "RobotoRegular": require("../assets/fonts/Roboto-Regular.ttf"),
//     "RobotoMedium": require("../assets/fonts/Roboto-Medium.ttf"),
//   });
// };

export default function App() {
  const [user, setUser] = useState(null);
  db.auth().onAuthStateChanged((user) => setUser(user))

  const routing = useRoute(false);
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
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        {routing}
      </NavigationContainer>
    </Provider>
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
