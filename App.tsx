import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-native-paper';
import { Main } from './src';
import { theme } from './src/core/theme';

export default function App () {
  return (
    <Provider theme={theme}>
      <Main />
    </Provider>
  )
}
