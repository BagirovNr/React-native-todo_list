import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button,Alert } from 'react-native';

export default function App() {
  const handleTextPress = () => {
    Alert.prompt('Nadir', 'hello world' ,text => console.log(text));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} >Hello {'\n'}World</Text>
    <Button title='Hello' onPress={handleTextPress} color='red' />
    <Button title='Hello' onPress={handleTextPress} color='blue' />


      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  
});