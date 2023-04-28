import {Image, Text, View} from 'react-native'

export const BookCard = ({book}) => {

   return (
      <View>
         <Image 
            style={{width:'20%', height: '100%'}}
            source={{uri: book.url}}
            />
      </View>
   )
}