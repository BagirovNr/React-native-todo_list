import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

export default function Form({addHandler}) {
    const [value, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Enter task..."
                value={value}
    />
    <Button title="Add task" onPress={() => addHandler(value)} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        margin: 10,
        padding: 10,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '60%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 13,
    },
});
