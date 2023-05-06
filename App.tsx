import React from 'react';
import { ScrollView, StyleSheet, useColorScheme, View, SafeAreaView, StatusBar } from 'react-native';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { AllBooks} from './src/components/BookList';
import { CreateBook } from './src/components/BookCard';
import { Book } from './src/components/Book';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const { Navigator, Screen } = createBottomTabNavigator();

// Bottom Tab Navigator --------------------------


const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Add Book'/>
    <BottomNavigationTab title='All Books'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator screenOptions={{headerShown: false}} tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Create' component={CreateBook}/>
    <Screen name='AllBooks' component={AllBooks}/>
    <Screen name='BOOKS' component={Book}/>
  </Navigator>
);

// APP ----------------------------------------------


function App(): JSX.Element {
  
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer >
          <TabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}



export default App;
