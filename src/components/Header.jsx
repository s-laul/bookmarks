import {Text, View, Image } from 'react-native'

export const Header = () => {
   return (
   <View style={{paddingLeft: '15%', flexDirection: 'row', alignItems: 'center',}}>
      <Text style={{fontSize: 30, color: '#fff'}}>Bookmarks &nbsp;</Text> 
      <Image style={{height: '140%', width: '18%'}} source={require('../../public/Images/bookmark.png')}/>
   </View>
   )
}