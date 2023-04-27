import { Text, View } from "react-native"
import { Header } from "../components/Header"
import { BookList } from "../components/BookList"

export const Home = () => {
   return (
      <View>
         <Header />
         <Text>Home</Text>
         <BookList />
      </View>
   )
}

