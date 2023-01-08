// import 'expo/build/Expo.fx';
// import { AppRegistry, Platform } from 'react-native';
// import withExpoRoot from 'expo/build/launch/withExpoRoot';
//
// import App from './app';
// import { createRoot } from 'react-dom/client';
//
// AppRegistry.registerComponent('main', () => withExpoRoot(App));
// if (Platform.OS === 'web') {
//   const rootTag = createRoot(document.getElementById('root') ?? document.getElementById('main'));
//   const RootComponent = withExpoRoot(App);
//   rootTag.render(<RootComponent />);
// }


import 'expo/build/Expo.fx';
import { Platform } from 'react-native';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { createRoot } from 'react-dom/client';
import App from './App';

if (__DEV__) {
  activateKeepAwake();
}

if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root') ?? document.getElementById('main'));
  root.render(<App />);
} else {
  registerRootComponent(App);
}
