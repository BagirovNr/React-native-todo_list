import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>TODO LIST</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height:100,
        backgroundColor:"silver",
    },
    text: {
        fontSize: 18,
        color: "red",
        fontStyle: "italic",
        textAlign: "center",
    }
});
