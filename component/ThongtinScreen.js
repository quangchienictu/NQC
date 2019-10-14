import React from 'react';
import { Text, View ,Image,StatusBar,ActivityIndicator,FlatList,TouchableOpacity,StyleSheet,ImageBackground,Button ,Linking} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChitietScreen from './ChitietScreen'

class ThongtinScreen extends React.Component {
  render() {
    return (
      <View style={{marginTop:10,padding:5}}>
          <View style={{flexDirection:"row",borderBottomWidth:2,padding:10,borderBottomColor:"#b3aca3"}}>
              <Image  source={require('../img/nqc.png')}  style={{width:50,height:50}}/>
              <Text style={styles.nqc}>NQC</Text>
          </View>
          <View style={styles.boder}>
             <Text style={styles.colortext}>NQC là ứng dụng thuê xe online được phát triển bởi Quang Chiến ICTU dành riêng cho các sinh viên của Đại Học Thái Nguyên</Text>
          </View>
          <View style={styles.row}>
               <TouchableOpacity style={{flexDirection:"row"}} onPress={() => Linking.openURL('https://www.facebook.com/quangchien.ictu') }   >     
                    <Text style={styles.td}>Facebook :<Text style={styles.nd}> Quang Chiến</Text></Text>
              </TouchableOpacity>
          </View>
          <View style={styles.row}>
             <TouchableOpacity style={{flexDirection:"row"}} onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/') }   >     
                    <Text style={styles.td}>Email :<Text style={styles.nd}> quangchienictu@gmail.com</Text></Text>
              </TouchableOpacity>
                
          </View>
          <View style={styles.row}>
             <TouchableOpacity style={{flexDirection:"row"}} onPress={()=>{Linking.openURL('tel:0981636928');} }   >     
                    <Text style={styles.td}>Liên hệ :<Text style={styles.nd}> 0981.636.928</Text></Text>
              </TouchableOpacity>
                
          </View>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
    boder:{
        borderBottomWidth:1,
        padding:10,
       borderColor:'#b3aca3'

    },
    icon:{
        position: 'absolute', left: 5, top: 0
    },
    row: {
        borderBottomWidth:1,
        padding:10,
       borderColor:'#b3aca3',
        flexDirection:'row'
    },
    colortext:{
        color:"#34544d"
    },
    nqc:{
        color:"#118a6f",
        fontSize:20,
        fontWeight:'bold',
        marginTop:5,
        marginLeft:10
    },
    td:{
        color:"#118a6f"
    },
    nd:{
        fontWeight:'bold'
    }
})
const RootStack = createStackNavigator({
    Thongtin:{
        screen:ThongtinScreen,
        navigationOptions:{
            title:"Thông tin ứng dụng",
            headerStyle: {
                backgroundColor: '#009688',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
    }
  });


  export default createAppContainer(RootStack);