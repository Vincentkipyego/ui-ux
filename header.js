import React from "react";
import {View, Text, StyleSheet} from 'react-native';

 const Header =()=>{
     return(
         <View style ={Styles.view}>
         <Text style={Styles.text}>REACT NATIVE PROGRAMMING
         </Text>
         </View>

     )

 }

 const Styles = StyleSheet.create({
     view: {
      width :'100%',
      height: 30,
      backgroundColor: 'yellow',
      alignItems:'center',
      justifyContent: 'center',

     },
     text: {
         textAlign: 'center',
         fontWeight:'bold',
         fontSize : 20,
     },

 },)

 export default Header;