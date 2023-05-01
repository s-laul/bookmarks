import { Text, View } from "react-native"
import { Header } from "../components/Header"
import { BookList } from "../components/BookList"
import { BookCard, CreateBook } from "../components/BookCard"

export const Home = () => {
   return (
      <View>
         <Header />
         <CreateBook />
      </View>
   )
}

