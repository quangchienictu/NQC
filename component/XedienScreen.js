import React from 'react';
import { Text, View ,Image,StatusBar,ActivityIndicator,FlatList,TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChitietScreen from './ChitietScreen'
class XedienScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            dataSource:[],
            refresh:false
      };   
  }
    tanggia(temp){
           let temp2 = parseInt(temp)*1000;
           let temp3 = temp2*(20/100);

            return temp2+temp3;
    }
    refresh(){
        this.setState({
            refresh:true
        });
        fetch("http://192.168.0.109:8080/api_react/xedien.php")
        .then((response)=>response.json())
        .then((responseJson)=>{
          this.setState({
            dataSource:responseJson,
            refresh:false
          });
        })
        .catch((e)=>alert("loi"));
    }
    componentDidMount(){
      fetch("http://192.168.0.109:8080/api_react/xedien.php")
      .then((response)=>response.json())
      .then((responseJson)=>{
        this.setState({
          dataSource:responseJson
        });
      })
      .catch((e)=>alert("loi"));
    }

   
    render() {
     return(
       
      <FlatList
        
      horizontal={false}
  
    horizontal={false}
    numColumns={2}
      refreshing={this.state.refresh}
      onRefresh={()=>{this.refresh()}}
      data={this.state.dataSource}
      renderItem={({item}) =>
      <TouchableOpacity  style={styles.item} onPress={() => {this.props.navigation.navigate('Chitiet',{thamso:item.id})}}>
     <View style={styles.row}>
      <ImageBackground  imageStyle={{ borderRadius: 10 }}  source={{uri:item.hinhanh}} style={styles.container}>
        <Text style={styles.gia}>
             <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',fontSize:10,color:'black',marginRight:10}}> {this.tanggia(item.gia)}<Text style={styles.d,{color:'black'}}>đ</Text> </Text>
             <Text>{item.gia}<Text style={styles.d}>đ</Text></Text>
        </Text>
      
        <Text style={styles.ten}>{item.ten}</Text>
      </ImageBackground >
      </View>
      </TouchableOpacity>
    }
      />
     );
    }
  }

  const styles= StyleSheet.create({
        item:{
       
          //  justifyContent:'center',
           borderRadius:10,
            marginTop:10,
            marginLeft:10,
            marginRight:10,
            
            
        },
        row: {
            width:172
           
        },
        container: {
            flex: 1,
            width: null,
            height: 100,
          },
          ten:{
              color:"#ffffff",
              
              fontSize:13,
              fontWeight:'bold',
              position: 'absolute', left: 5, right: 0, bottom: 0
          },
          gia:{
            color:"#fff",
            borderRadius:5,
          backgroundColor:'#08ad3c',
            paddingHorizontal:10,
            fontSize:13,
            fontWeight:'bold',
            position: 'absolute', left: 0, top: 0
        },
        d:{
            fontSize:9,textDecorationLine: "underline",textDecorationStyle: "solid",textDecorationColor: "#000"
        }
  });

  const RootStack = createStackNavigator({
    Xedien:{
        screen:XedienScreen,
        navigationOptions:{
            title:"Thuê xe điện",
            headerStyle: {
                backgroundColor: '#009688',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
    },
    Chitiet:{
        screen: ChitietScreen,
        navigationOptions:{
            title:"Yêu cầu thuê",
            headerStyle: {
                backgroundColor: '#009688',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        }
    },
  });


  export default createAppContainer(RootStack);