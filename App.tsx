/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import theme from './src/theme';
import Navigation from './src/navigation';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.black}}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.primary}
      />
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
