/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// React Imports
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

// src imports
import { Home } from './src/screens/Home';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#fcf9ed'
  };

  return (
  
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

      <Home />
      
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({


});

export default App;
