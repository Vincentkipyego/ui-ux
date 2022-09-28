import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Modal, Pressable, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';

export default function App() {

  const [name, setName]= useState()
  const[submited, setSubmited]= useState(false)
  const[ showwarning, setShowwarning]= useState(false)



  const onPressHandler =() =>{
    if( name.length> 3)
    {
      setSubmited(!submited)
    }

    else
    {
      setShowwarning(true)
      // ToastAndroid.show('the name must be longer than 3 characters',
      // ToastAndroid.LONG)
      // // Alert.alert('warning', 'more than 3 characters', [
      //   {text: 'ok', onPress: () => console.warn('ok presesed')},

      //   {text: 'cancel', onPress : ()=> console.warn('cancel pressed')}])
    }
   
  }

  return (
    <View style={styles.container}>
    <Modal 
    visible={showwarning}
    onRequestClose= {()=> setShowwarning(false)}
    transparent>

    <View style={styles.modalcontainer}>
    <View style= {styles.inside_modal}>

    <View style={styles.warning_view}>
    <Text style= {styles.text}>WARNING!</Text>
    </View>

    <View style={styles.warning_message}>
    <Text style= {styles.text}>Should be more than 3 characters!</Text>
    </View>   
    
    <Pressable 
    style={styles.okbutton}
    onPress={()=> setShowwarning(false)}>
    <Text style= {styles.text}>OK</Text>
    </Pressable>
    </View>
    
    </View>
   
    </Modal>

    <View style={styles.body}>
      <Text style={styles.text}>please write your name</Text>

      <TextInput style={styles.input}
      placeholder='e.g john'
      onChangeText={(value) => setName(value)}/>

      <Button title='Submit'
      onPress={onPressHandler}/>
   

     {submited ?
      <Text style={styles.text}>You are registerd as {name} </Text>
    :
       null
}
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
   
  },
  input:{
    width:250,
   borderWidth: 3,
   alignItems:"center",
   borderRadius:8,
   padding:6,
   margin:10,
   textAlign:'center'

  },
  text:{
    fontSize:20,
    margin:10,
    textAlign: 'center',
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
    
  },
  inside_modal :{
    width: 250,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth:1,

  },
  warning_view: {
    backgroundColor: 'yellow',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height: 50,
    alignItems:'center'
  },
  warning_message: {
    alignItems:'center',
    justifyContent:'center',
    height:150,
  
  },
  okbutton:{
    height:48,
    justifyContent:'center',
    alignItems:'center',
    width:240,
    backgroundColor: 'white',
    textAlign:'center',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    
  },

});
