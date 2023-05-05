import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List , ListItem, Card, Icon, Button, Divider, Text } from '@ui-kitten/components'
import { AllBooks } from './BookList';

  
export const Book = ({route}) => {
   const [books, setBooks] = useState([])
   const {singleBook} = route.params
   const navigation = useNavigation()

   const getBooks = useCallback(() => {
      AsyncStorage.getItem('BOOKS').then((books) => {
        setBooks(JSON.parse(books));
      });
    }, []);
  
    useFocusEffect(getBooks);

    const deleteBook = async () => {
      const newBooks = await books.filter((book) => book.id !== singleBook.id);
      setBooks(newBooks);
      const booksString = JSON.stringify(newBooks);
      await AsyncStorage.setItem('BOOKS', booksString);
      navigation.navigate('AllBooks');
    }
    
    
    return (
         <View style={styles.container}>
            <Image source={{ uri: singleBook.url }} style={{alignSelf:'center', width: '100%', height: 200, marginTop: -50 }} />
            <Text style={styles.title} category='h2'>
               {singleBook.title}
            </Text>
            <View style={styles.bottom}>
               <Button 
               appearance='ghost' 
               onPress={deleteBook} 
               status='danger'
               
               style={styles.button}>Delete Book</Button>
            </View>
         </View>
    )
   }

   const styles = StyleSheet.create ({
      container: {
         flex: 1,
         backgroundColor: "#222B45",
         color: "FFF",
         paddingTop: 50,


         width: Dimensions.get('window').width
      },
      item: {
         marginVertical: 4
      },
      title: {
         textAlign: 'center',
      },
      notes: {
         fontSize: 24
      },
      button: {
         marginVertical: 40,
         marginHorizontal: 124,
         

      },
      bottom: {
         flex: 1,
         justifyContent: 'flex-end',
         marginBottom: 30
      }
   })