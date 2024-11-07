
import 'react-native-gesture-handler'; // Import this at the very top
import { AppRegistry } from 'react-native';
import App from './App'; 
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
