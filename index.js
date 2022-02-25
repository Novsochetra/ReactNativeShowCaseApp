import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
import { StorybookUIRoot } from './storybook';
enableScreens(true);

AppRegistry.registerComponent(appName, () => (__DEV__ ? StorybookUIRoot : App));

// module.exports = __DEV__ ? StorybookUI : App;
