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
        onPress={() =>
          navigation.navigate('BOOKS', {
            singleBook: item
          })
        }
      >
        {item.url && (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <Text category='h4' style={styles.titleText}>
               {item.title}
            </Text>
         </View>
         )}
    </ListItem>
    );
  
    return (
      <View style={{ backgroundColor: '#222B45', flex: 1 }}>
        <View style={{paddingLeft: '30%', paddingTop: '15%',flexDirection: 'row', paddingBottom: '10%', alignItems: 'center',}}>
      <Text style={{fontSize: 20, color: '#fff'}}>All Books &nbsp;</Text> 
      <Image style={{height: '160%', width: '14%'}} source={require('../../public/Images/bookmark.png')}/>
   </View>
        <List
          style={{ flex: 1, backgroundColor: '#222B45' }}
          data={books.reverse()}
          renderItem={renderItem}
        />
      </View>
    );
  };

const styles = StyleSheet.create ({
   container: {
      fontSize: 20,
      alignItems: 'center'
   
   },
   item: {
      marginVertical: 4
   },
   title: {
      paddingTop: 50,
      textAlign: 'center'
   },
   image: {
      width: 120,
      height: 200,
      alignSelf: 'center',
      paddingTop: -10,
   },
})
