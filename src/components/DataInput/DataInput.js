import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class DataInput extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInput}>
                    <TextInput style={styles.text} value="Enter Binary"></TextInput>
                </View>
                <View style={styles.textInput}>
                    <TextInput style={styles.text} value="Enter Dec"></TextInput>
                </View>
                <Button buttonStyle={styles.button} title="Reset" />
            </View>
        );
    }
}

                

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 30,
        justifyContent: "space-around",
        //borderColor: "red",
        //borderWidth: 1,
        height: "63%",
        backgroundColor: "#3a485e"
    },
    textInput: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "30%",
        borderColor: "#667996",
        borderWidth: 1,
        alignSelf: "center",
        fontSize: 40
    },
    text: {
        fontSize: 40
    },
    button: {
        backgroundColor: "red"
    }
})

