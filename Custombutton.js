import React from "react";
import {View, StyleSheet, Pressable, Text} from 'react-native';

const MyButton =(props) =>{
    return(


    <Pressable
      onPress={props.onPressFunctions}
     style= {({pressed}) => [
       {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
       styles.button
     ]}  >

      <Text style={styles.text}>{props.title}</Text>

      </Pressable>
   
    )
}


const styles = StyleSheet.create({
    text:{
        fontSize:20,
        margin:10,
        textAlign: 'center',
      },
      button: {
        backgroundColor: 'green',
       
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent:'center'},

},)
export default MyButton;