import { useState } from 'react';
import { StyleSheet, Image, View, useNavigation, useNavigation, useFocusEffect} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List , ListItem, Card, Icon, Button, Divider, Text } from '@ui-kitten/components'

  
export const Book = ({route}) => {
   const [books, setBooks] = useState([])
   const {singleBook} = route.params
   const navigation = useNavigation()

   useFocusEffect(
      React.useCallback(() => {
         getBooks()
      }, [])
   )

   const getBooks = () => {
      AsyncStorage.getItem('BOOKS').then((books) => {
         setBooks(JSON.parse(books))
      })
   }

   const deleteNote = async () => {
      const newBooks = await books.filter((book) => book !== singleBook)
      await AsyncStorage.setItem('BOOKS', JSON.stringify(newBooks)).then(() => navigation.navigate('BooksList'))
   }
    return (
         <View>
            <Text style={StyleSheet.title} category='h1'>
               Books
            </Text>
            <Text style={{ fontSize: 22, margin: 20 }} >
               {singleBook}
            </Text>
            <View style={styles.bottom}>
               <Button onPress={deleteNote} style={styles.button}/>
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