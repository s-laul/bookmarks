import { useState } from 'react';
import { StyleSheet, Image, View, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Card, Button , Text, Title ,Paragraph } from '@ui-kitten/components'
import { Header } from './Header';
import { AllBooks } from './BookList';
  
export const CreateBook = ({}) => {
   const [book, setBook] = useState('')
   const [inputTitleState, setInputTitleState] = useState ('')
   const [inputAuthorState, setInputAuthorState] = useState ('')
   const [newBook, setNewBook] = useState(null) // added state variable
   const navigation = useNavigation()

   const getBook = async (title, author) => {
      const book = await fetch(`https://api.bookcover.longitood.com/bookcover?book_title=${title}&author_name=${author}`)
      const data = await book.json()
      console.log(data)
      return data;
   }

   const saveBook = async () => {
      const newBookData = await getBook(inputTitleState, inputAuthorState)
      setNewBook(newBookData) // set state variable with book data
      const value = await AsyncStorage.getItem('BOOKS')
      const books = value ? JSON.parse(value) : []
      books.push(newBookData)
      const book = { title: inputTitleState }
      books.push(book)
      await AsyncStorage.setItem('BOOKS', JSON.stringify(books))
      .then (() => {
        setInputTitleState('')
        setInputAuthorState('')
        console.log( {uri: newBook.url} )
        setNewBook(null)
        navigation.navigate('AllBooks')
        setBook('')
      })
   }

    return (
      <View style={styles.container}>
         <Header />
         <Text style={{marginTop: 45, fontSize: 18}}>Search for a Book:</Text>
         <TextInput
            value={inputTitleState}
            onChangeText={setInputTitleState}
            style={{backgroundColor:'white', marginTop: 20, paddingLeft: 8, paddingTop: 6, paddingBottom: 4, fontSize: 14, borderRadius: 10}}
            multiline={true}
            autoFocus
            placeholder='Title'
         />
         <TextInput
            value={inputAuthorState}
            onChangeText={setInputAuthorState}
            style={{backgroundColor:'white', marginTop: 20, paddingLeft: 8, paddingTop: 6, paddingBottom: 4, fontSize: 14, borderRadius: 10}}
            multiline={true}
            autoFocus
            placeholder='Author'
         />
         {newBook && <Image source={{ uri: newBook.url }} style={{ width: 120, height: 200, marginHorizontal: '30%', marginTop: '8%' }} />}

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
      paddingTop: 50,
      width: Dimensions.get('window').width
   },
   bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 10
   },
   button: {
      marginBottom: 10,
      marginHorizontal: 80
   }
})
