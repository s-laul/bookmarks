import { useEffect, useState } from 'react'
import {Text, View} from 'react-native'
import { BookCard } from './BookCard'


export const BookList = () => {
   const [book, setBook] = useState({})

   const getBook = async () => {
      const book = await fetch('https://api.bookcover.longitood.com/bookcover?book_title=harry potter and the half blood prince&author_name=jk rowling')
      const data = await book.json()
      console.log(data)
      setBook(data)
   }

   useEffect(() => {
      getBook()
   }, [])
   return (
      <View>
         <Text>Book List</Text>
         <BookCard book={book}/>
      </View>
   )
}   