import React, { Component } from 'react';
import { Text, View ,TouchableOpacity,FlatList,Image,StyleSheet,TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
export default class ChitietScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params : this.props.navigation.state.params.thamso,
            dataSource:[],
            giaoxe:'4,000',
            dc:'',
            sdt:'',
            
        }
        
    
    }
 tanggia(temp){
        let temp2 = parseInt(temp)*1000;
        let temp3 = temp2*(20/100);

         return temp2+temp3;
 }
 ngaythue(temp){
    let temp2 = parseInt(temp);
    return temp2*11
 }
componentDidMount(){
    fetch('http://192.168.0.109:8080/api_react/select_item.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.navigation.state.params.thamso 
        }),
      })
      .then((response)=>response.json())
      .then((responseJson)=>{
        this.setState({
            dataSource:responseJson,
           
          });
      })
}

thue(){
    fetch('http://192.168.0.109:8080/api_react/yeucau.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.props.navigation.state.params.thamso,
          sdt:this.state.sdt,
          dc:this.state.dc
        }),
      })
      .then((response)=>response.json())
      .then((responseJson)=>{
        alert(responseJson.kq)
      })
}
  render() {
    return (
        <FlatList
     data={this.state.dataSource}
      renderItem={({item}) =>
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
     <View >
        <Image
            style={styles.img}
            source={{uri:item.hinhanh}}
            />
        <Text style={styles.tieude}>Thông tin xe</Text>
        <View style={styles.container}>
                    <View style={styles.thongtin}>
                            < Text>Tên xe : </Text>
                            <Text style={styles.nd}>{item.ten}</Text>
                    </View>
                    <View style={styles.thongtin}>
                        <Text>Biển số : </Text>
                        <Text style={styles.nd}>{item.bienso}</Text>
                    </View>
                        <View style={styles.thongtin}>
                            <Text>Loại xe : </Text>
                            <Text style={styles.nd}>{item.loaixe}</Text>
                    </View>
                    <View style={styles.thongtin}>
                            <Text>Trạng thái : </Text>
                                <View style={styles.nd}>
                                    <Text style={styles.ss}>Sẵn sàng  <Image  source={require('../img/online.png')}  style={{width:15,height:15}}/></Text>
                                
                                </View>
                    </View>
                    <View style={styles.thongtin}>
                            <Text>Giá giờ thuê : </Text>
                            <Text style={styles.nd}><Text style={styles.gachchan}> {this.tanggia(item.gia)}<Text style={styles.d}>đ</Text></Text><Text>  </Text>{item.gia}<Text style={styles.d}>đ</Text></Text>
                    </View>
                    <View style={styles.thongtin}>
                            <Text>Thuê ngày : </Text>
                            <Text style={styles.nd}>{this.ngaythue(item.gia)}.000<Text style={styles.d}>đ</Text></Text>
                    </View>
                    <View style={styles.thongtin}>
                            <View >
                                <Text>Phí phục vụ : </Text>
                                <Text style={styles.sao}>*Giao xe tận nơi 2 chiều</Text>
                            </View>
                            <Text style={styles.nd}><Text style={styles.gachchan}> 5,000<Text style={styles.d}>đ</Text></Text><Text>  </Text>{this.state.giaoxe}<Text style={styles.d}>đ</Text></Text>
                    </View>
            
        </View>
        <Text style={styles.tieude}>Thuê xe</Text>
        <View style={styles.container}>
           <View>
           <Text style={styles.hoten}>Địa chỉ :</Text>
            <TextInput style={styles.input} onChangeText={(dc)=>this.setState({dc})} placeholder="Cổng chính CNTT...." placeholderTextColor="rgba(255,255,255,0.8)"  returnKeyType='next' autoCorrect={false} />
           </View>
           <View>
           <Text style={styles.hoten}>Số điện thoại :</Text>
            <TextInput style={styles.input} onChangeText={(sdt)=>this.setState({sdt})} placeholder="012345 ...." placeholderTextColor="#e4e4e4"  returnKeyType='next' autoCorrect={false} />
           </View>
           <TouchableOpacity  style={styles.buttom} onPress={() => {this.thue()}}>
               <View >
                     <Text style={styles.viewbottom}>Thuê</Text>
               </View>
           </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
    }
      />
    );
  }
}

const styles= StyleSheet.create({
    container:{
       paddingLeft:10,
       paddingRight:10,
   
    },
    tieude:{
        textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
        color:"#3b5a58f7"
   
        
    },
    input:{
        height:40,
        backgroundColor:'#868383',
       color:"#fff",
        paddingHorizontal:20,
        marginBottom:20,
       
      
       
    },
    img:{
        width:null,
        height:200,
    },
    thongtin:{
        flexDirection:"row",
        borderBottomWidth:1,
        borderColor:"#585858f7",
        padding:5,
        marginBottom:10
       
    },
    d:{
        color:'#f59d2c',
        textDecorationLine: "underline",textDecorationStyle: "solid",textDecorationColor: "#000"
    },
    sao:{
        fontSize:8
    },
    ss:{
        color:"#18da0e"
    },
    nd:{
        position: 'absolute', right: 0,top:5, marginRight:3, color:"#3b5a58f7",fontWeight:"bold"
    },
    gachchan:{
        textDecorationLine: 'line-through', textDecorationStyle: 'solid',fontSize:10,color:"#f59d2c"
    },
    buttom:{
       
    },
    viewbottom:{
        textAlign:"center",
        backgroundColor:"#f59d2c",
        color:"#ffffff",
        paddingBottom:5,
        paddingTop:5,
        marginBottom:20,
        borderRadius:5,
        fontWeight:'bold',
        fontSize:16
    }
})