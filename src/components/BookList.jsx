import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View} from 'react-native'
import { BookCard, CreateCard, CreateBook } from './BookCard'


export const BookList = () => {
   const [book, setBook] = useState({})
   const [inputTitleState, setInputTitleState] = useState ('')
   const [inputAuthorState, setInputAuthorState] = useState ('')

   const getBook = async () => {
      const book = await fetch(`https://api.bookcover.longitood.com/bookcover?book_title=${inputTitleState}&author_name= `)
      const data = await book.json()
      console.log(data)
      setBook(data)
   }

   // useEffect(() => {
   //    getBook()
   // }, [])

   return (
      <View>
         <Text style={styles.inputLabel}>Search for a Book:</Text>
         <TextInput
            onChangeText={setInputTitleState}
            style={styles.input}
            placeholder='Title'
         />
         {/* <TextInput
         onChange={setInputAuthorState}
         style={styles.input}
         placeholder='Author'
         /> */}
         <Button onPress={getBook} title='Search'/>

         <CreateBook />
      </View>
   )
}   

const styles = StyleSheet.create ({
   input: {
      borderWidth: 1,
      borderColor: 'gray',
      margin: 10,
      paddingVertical: 10,
      paddingStart: 10
      
   },
   inputLabel: {
      paddingBottom: 0,
      marginHorizontal: 10,
      marginTop: 10
   },
   button: {
      borderWidth: 1,
      borderColor: '#000'
      
   },
   buttonText: {
      color: 'blue',
      textAlign: 'center'

   }
})
