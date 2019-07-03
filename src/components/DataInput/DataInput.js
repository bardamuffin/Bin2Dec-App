import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button } from 'react-native';

export default class DataInput extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} value="Enter a number here"></TextInput>
                <Button style={styles.button} title="Submit" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        marginLeft: 60,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    textInput: {
        width: "100%"
    },
    button: {
        marginLeft: 60
    }

})
