import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './redux/dashboard/store';
import Main from './components/Main';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "RobotoRegular": require("../assets/fonts/Roboto-Regular.ttf"),
//     "RobotoMedium": require("../assets/fonts/Roboto-Medium.ttf"),
//   });
// };

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
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
