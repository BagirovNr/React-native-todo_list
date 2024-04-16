import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View ,StyleSheet, FlatList,Text, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfitems,setListOfitems]=useState([
    {text:"Buy coffee",key:"1"},
    {text:"Buy milk",key:"2"},
    {text:"Buy bread",key:"3"},
    {text:"Buy water",key:"4"},
  ]);
  const addHandler=(text)=>{
    setListOfitems([{text:text, key:Math.random().toString(36).substring(7) },...listOfitems]);
  }
  const deleteHandler=(key)=>{
    Alert.alert("Delete item","Are you sure?",[{text:"No"},{text:"Yes", onPress:()=>setListOfitems(listOfitems.filter(el=>el.key!==key))}])
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <Header/>
      <View>
<Form addHandler={addHandler} />
    <FlatList data={listOfitems} renderItem={({item})=>(
      <ListItem el={item} deleteHandler={deleteHandler}/>
)}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
