import { useState, useNavigation, useFocusEffect } from 'react';
import { StyleSheet, Image, View, TextInput, KeyboardAvoidingView} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { List , ListItem, Card, Icon, Button, Divider, Text } from '@ui-kitten/components'



  
export const AllBooks = ({}) => {
   const [books, setBooks] = useState([])
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

   const renderItem = ({ item, index }) => (
      <ListItem
        title={<Text category='h5'>{item}</Text>}
        onPress={() => navigation.navigate("Book", {
         singleBook: item
        })}
      />
   )

    return (
         <View>
            <List
               style={{ flex: 1, backgroundColor: "#222B45" }}
               data={books.reverse()}
               ItemSeparatorComponent={Divider}
               renderItem={renderItem}
            />
         </View>
    )
   }

   const styles = StyleSheet.create ({
      container: {
         fontSize: 20
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