import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Image, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List , ListItem, Card, Icon, Button, Divider, Text } from '@ui-kitten/components'

  
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
      const newBooks = await books.filter((book) => book !== singleBook)
      await AsyncStorage.setItem('BOOKS', JSON.stringify(newBooks)).then(() => navigation.navigate('AllBooks'))
   }
    return (
         <View style={{ backgroundColor: "#222B45", flex: 1}}>
            <Text style={styles.title} category='h1'>
               Books
            </Text>
            <Text style={{ fontSize: 22, margin: 20 }} >
               {singleBook}
            </Text>
            <View style={styles.bottom}>
               <Button onPress={deleteBook} style={styles.button}>Delete Book</Button>
            </View>
         </View>
    )
   }

   const styles = StyleSheet.create ({
      container: {
         flex: 1,
         backgroundColor: "#fff",
         alignItems: 'center',
         justifyContent: 'center'
      },
      item: {
         marginVertical: 4
      },
      title: {
         textAlign: 'center',
         marginTop: 50
      },
      notes: {
         fontSize: 24
      }
   })