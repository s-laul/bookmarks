import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List , ListItem, Card, Icon, Button, Divider, Text } from '@ui-kitten/components'
import { AllBooks } from './BookList';
import { TextInput } from 'react-native-paper';

  
export const Book = ({ route }) => {
   const [books, setBooks] = useState([]);
   const [bookmark, setBookmark] = useState('');
   const { singleBook } = route.params;
   const navigation = useNavigation();
 
   const getBooks = useCallback(() => {
     AsyncStorage.getItem('BOOKS').then((books) => {
       setBooks(JSON.parse(books));
     });
   }, []);
 
   useFocusEffect(getBooks);
 
   const deleteBook = async () => {
     const newBooks = await books.filter((book) => book.title !== singleBook.title);
     setBooks(newBooks);
     const booksString = JSON.stringify(newBooks);
     await AsyncStorage.setItem('BOOKS', booksString);
     navigation.navigate('AllBooks');
   };
 
   const saveBookmark = async () => {
     const updatedBooks = books.map((book) => {
       if (book.title === singleBook.title) {
         return {
           ...book,
           bookmark: bookmark
         };
       }
       return book;
     });
 
     setBooks(updatedBooks);
     const booksString = JSON.stringify(updatedBooks);
     await AsyncStorage.setItem('BOOKS', booksString);
   };
 
   return (
     <View style={styles.container}>
       <View>
         <Image source={{ uri: singleBook.url }} style={{ alignSelf: 'center', width: '100%', height: 200, marginTop: -50 }} />
       </View>
       <View style={{ paddingTop: 60 }}>
         <Button
           style={styles.button}
           size='tiny'
           appearance='outline'
           onPress={deleteBook}
           status='danger'
         >
           DELETE
         </Button>
       </View>
       <View>
         <TextInput
           style={styles.bookmark}
           placeholder='Add a Bookmark'
           placeholderTextColor={'#fff'}
           multiline
           value={bookmark}
           onChangeText={setBookmark}
         />
         <Button
           style={{ marginHorizontal: 120, marginTop: 10 }}
           appearance='filled'
           onPress={saveBookmark}
         >
           Save
         </Button>
       </View>
 
     </View>
   );
 };
 
   const styles = StyleSheet.create ({
      container: {
         flex: 1,
         backgroundColor: "#222B45",
         paddingTop: 40,


         width: Dimensions.get('window').width
      },
      item: {
         marginVertical: 4
      },
      title: {
         textAlign: 'center',
         color: '#fff',
         marginTop: 12
      },
      notes: {
         fontSize: 24
      },
      button: {
         marginTop: -90,
         marginLeft: 300,

      },
      bottom: {
         flex: 1,
         justifyContent: 'flex-start',
      },
      bookmark: {
         backgroundColor: '#acafb9',
         marginHorizontal: '4%',
         marginTop: '4%',
         paddingBottom: 200,
         borderTopLeftRadius: 12,
         borderTopRightRadius: 12,
         borderRadius: 15,
         color: '#FFF'
         
      
      }
   })