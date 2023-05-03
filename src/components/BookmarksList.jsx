
import { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Image, View, TextInput, KeyboardAvoidingView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { List , ListItem, Card, Icon, Button, Divider, Text } from '@ui-kitten/components'



  
export const AllBooks = ({}) => {
   const [books, setBooks] = useState([])
   const navigation = useNavigation()

   const getBooks = useCallback(() => {
      AsyncStorage.getItem('BOOKS').then((books) => {
        setBooks(JSON.parse(books));
      });
    }, []);
  
    useFocusEffect(getBooks);

   const renderItem = ({ item, index }) => (
      <ListItem
        title={<Text category='h5'>{item}</Text>}
        onPress={() => navigation.navigate("BOOKS", {
         singleBook: item
        })}
      />
   )

    return (
         <View style={{ backgroundColor: "#222B45", flex: 1}}>
            <Text style={styles.title} category='h1'>
               Books
            </Text>
            <List
               style={{ flex: 1, backgroundColor: "#222B45" }}
               data={books}
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