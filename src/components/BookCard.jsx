import { useState } from 'react';
import { StyleSheet, Image, View, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Layout} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import {Card, Button , Text, Title ,Paragraph } from '@ui-kitten/components'

export const BookCard = ({book}) => {

   return (
      <View style={styles.card}>
         <Image 
            style={{width: '40%', height: '60%', alignItems: 'center'}}
            source={{uri: book.url}}
            />
         <Text>Harry Potter and the Half-Blood Prince</Text>
         <Text>J.K. Rowling</Text>
         <TextInput placeholder = 'Enter notes'style={{backgroundColor: 'white', borderColor:'black', borderWidth: 0.25, padding: (10, 10, 0, 10), borderRadius: 5}}></TextInput>
      </View>
   )
}

// const styles = StyleSheet.create({
//    card: {
//       alignItems: 'center',
//       padding: 20,
//       margin: 10,
//       borderWidth: 0.3,
//       borderColor: 'light-gray',
//       borderRadius: 10,
//       backgroundColor: '#a1ccb3'
//    },
// })



  
export const CreateBook = ({}) => {
   const [book, setBook] = useState('')
   const navigation = useNavigation()

   const saveBook = async () => {
      const value = await AsyncStorage.getItem('BOOKS')
      const b = value ? JSON.parse(value) : []
      b.push(book)
      await AsyncStorage.setItem('BOOKS', JSON.stringify(b)).then (() => navigation.navigate('AllBooks'))
      setBook('')
   }



    return (
         <View style={styles.container}>
            <TextInput
               value={book}
               onChangeText={setBook}
               style={{ color: '#FFF', fontSize: 22 }}
               multiline={true}
               autoFocus
               selectionColor='#000'
               />
               <KeyboardAvoidingView style={styles.bottom}>
                  <Button style={styles.button} onPress={saveBook}>
                     Add Book
                  </Button>
               </KeyboardAvoidingView>
         </View>
    )
   }

   const styles = StyleSheet.create ({
      container: {
         flex: 1,
         backgroundColor: "#222B45",
         color: "FFF",
         padding: 30,
         paddingTop: 80,

         width: Dimensions.get('window').width
      },
      bottom: {
         flex: 1,
         justifyContent: 'flex-end',
         marginBottom: 36
      },
      button: {
         marginBottom: 30,

      }
   })
         
      //   <Card style={Styles.container}>
      //   <Card.Content>
      //       <Title>Book Title</Title>
      //   </Card.Content>
      //   <Card.Cover 
      //       style={Styles.Cover}
      //       source={{uri: book.url}}
      //       /> 
      //  <Card.Content>
      //   <Paragraph>A Computer Science portal for Geeks</Paragraph>
      //   </Card.Content>
      //   <Card.Actions>
      //     <Button>Add To Favourites</Button>
      //   </Card.Actions>
      // </Card>
         
      //    )
      // }
  
// const Styles = StyleSheet.create({
//     container :{
//         alignContent:'center',
//         margin:37
//     },
//     Cover: {
      
//       paddingHorizontal: '20%',
//       height: '60%',
//       width: '90%'
//     }
// })