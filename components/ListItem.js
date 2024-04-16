import React from 'react';
import { TouchableOpacity, StyleSheet,Text } from 'react-native';

export default function ListItem({el,deleteHandler}) {
  return (
   <TouchableOpacity onPress={() => deleteHandler(el.key)}>
    <Text style={styles.text}>{el.text}</Text>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    fontSize: 20,
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
    backgroundColor: "#fafafa",
    borderWidth:1,
    borderColor: "black",
    margin: 2,
    borderRadius: 13,

}
});
