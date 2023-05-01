import React from 'react';
import { ScrollView, StyleSheet, useColorScheme, View } from 'react-native';

// src imports
import { Home } from './src/screens/Home';

// style imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

const { Navigator, Screen } = createBottomTabNavigator();

// Bottom Tab Navigator --------------------------

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='USERS'/>
    <BottomNavigationTab title='ORDERS'/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Users' component={UsersScreen}/>
    <Screen name='Orders' component={OrdersScreen}/>
  </Navigator>
);

// APP ----------------------------------------------


function App(): JSX.Element {
  
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    ...styles.screen,
    backgroundColor: '#fcf9ed'
  };

  

  return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <TabNavigator />
          <Text style={{marginTop: 50}} >Bookmarks</Text>
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
