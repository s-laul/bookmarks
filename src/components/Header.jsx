import {Text, View, StyleSheet} from 'react-native'

export const Header = () => {
   return (
      <View style={styles.headerView}>
         <Text style={styles.headerText}>Bookmarks</Text>
      </View>
   )
}

const styles = StyleSheet.create ({
   headerView: {
      backgroundColor: '#f5f1c6',
      height: '20%',
      justifyContent: 'center',
   },
   headerText: {
      color: 'Black',
      fontSize: 32,
      textAlign: 'center'
   }
})