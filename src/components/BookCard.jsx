import {
   StyleSheet, 
   Image, 
   Text, 
   View,
   TextInput} from 'react-native'

export const BookCard = ({book}) => {

   return (
      <View style={styles.card}>
         <Image 
            style={{width: '40%', height: '60%'}}
            source={{uri: book.url}}
            />
         <Text>Harry Potter and the Half-Blood Prince</Text>
         <Text>J.K. Rowling</Text>
         <TextInput placeholder = 'Enter notes'style={{backgroundColor: 'white', borderColor:'black', borderWidth: 0.25, padding: (10, 10, 0, 10), borderRadius: 5}}></TextInput>
      </View>
   )
}

const styles = StyleSheet.create({
   card: {
      alignItems: 'center',
      padding: 20,
      margin: 10,
      borderWidth: 0.3,
      borderColor: 'light-gray',
      borderRadius: 10,
      backgroundColor: '#a1ccb3'
   },
})