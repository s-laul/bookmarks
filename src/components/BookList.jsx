import { useEffect, useState } from 'react'
import {Text, View} from 'react-native'
import { BookCard } from './BookCard'


export const BookList = () => {
   const [book, setBook] = useState({})

   const getBook = async () => {
      const response = await fetch('https://api.bookcover.longitood.com/bookcover?book_title=The+Pale+Blue+Dot&author_name=Carl+Sagan')
      const data = await response.json()
      console.log(data)
   }

   useEffect(() => {
      getBook()
   }, [])
   return (
      <View>
         <Text>Book List</Text>
         <BookCard />
      </View>
   )
}