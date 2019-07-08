import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default class DataInput extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} value="Enter binary"></TextInput>
                <TextInput style={styles.textInput} value="Enter Dec"></TextInput>
                <Button style={styles.button} title="Submit" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red",
        borderWidth: 1,
        height: "66%"
    },
    textInput: {
        width: "100%",
        height: "30%",
        borderColor: "yellow",
        borderWidth: 1,
        alignSelf: "center"
    }
})

