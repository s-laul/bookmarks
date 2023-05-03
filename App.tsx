import React from 'react';
import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native';

// src imports
import { Home } from './src/screens/Home';

// style imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { BookList } from './src/components/BookList';
import { AllBooks } from './src/components/BookmarksList'
import { CreateBook } from './src/components/BookCard';
import { Book } from './src/components/Book';

const { Navigator, Screen } = createBottomTabNavigator();

// Bottom Tab Navigator --------------------------


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Add Book'/>
    <BottomNavigationTab title='All Books'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Create' component={CreateBook}/>
    <Screen name='AllBooks' component={AllBooks}/>
    <Screen name='BOOKS' component={Book}/>

  </Navigator>
);

// APP ----------------------------------------------


function App(): JSX.Element {
  
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   ...styles.screen,
  //   backgroundColor: '#fcf9ed'
  // };

  

  return (
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
          <TabNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }

});

export default App;
