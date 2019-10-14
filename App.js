import React from 'react';
import { Text, View ,Image,StatusBar,ActivityIndicator,FlatList} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import XeMay from './component/XemayScreen';
import XeDien from './component/XedienScreen';
import Thongtin from './component/ThongtinScreen';













const TabNavigator = createBottomTabNavigator({
  Xedien: {
    screen:XeDien,
    navigationOptions:{
      title:"Thuê xe điện",
      tabBarLabel:'Thuê xe điện',
      activeBackgroundColor :'red',
      activeTintColor: 'tomato',
      tabBarIcon: <Image source={{uri: 'https://cdn0.iconfinder.com/data/icons/vehicle-1/48/v1-512.png'}} style={{width:40, height: 30}}/>
    }
  },
  Xemay: {
    screen:XeMay,
    navigationOptions:{
      title:"Thuê xe máy",
      tabBarLabel:'Thuê xe máy',
      activeTintColor: 'tomato',
      tabBarIcon: <Image source={{uri: 'https://static.thenounproject.com/png/24598-200.png'}} style={{width:40, height: 30}}/>
    }
  },
  Thongtin: {
    screen:Thongtin,
    navigationOptions:{
      title:"Thông tin",
      tabBarLabel:'Thông tin',
      activeTintColor: 'tomato',
      tabBarIcon: <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/education-set-4/512/information-512.png'}} style={{width:25, height: 25}}/>
    }
  },
},{
  tabBarOptions: {
    activeBackgroundColor:'#009688',
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: 'white',
    },
  }
}

);

export default createAppContainer(TabNavigator);