import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button, Text } from 'react-native';

export default class DataInput extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.binInput} value=""></TextInput>
                <View style={styles.textInfo}>
                    <Text>Binnay</Text>
                </View>          
                <TextInput style={styles.decInput} value=""></TextInput>
            </View>
        );
    }
}
                

const styles = StyleSheet.create({
    container: {
        display: "flex",
        borderColor: "red",
        borderWidth: 1,
        height: "61.5%",
        marginTop:"9%",
        backgroundColor: "black",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 10
        
    },
    binInput: {
        borderColor: "purple",
        borderWidth: 10,
        backgroundColor: "red",
        width: "100%",
        height: "45%",
        fontSize: 60,
        padding: 40
        //marginTop:"20%",
        //margin: "15%"
        
    },
    decInput: {
        borderColor: "purple",
        //borderWidth: 10,
        backgroundColor: "yellow",
        width: "100%",
        height: "45%",
        justifyContent: "center",
        fontSize: 60,
        //padding: 40 ,
        
        //margin: "15%"

        
    },
    textInfo: {
        backgroundColor: "green",
        width: "100%",
        borderColor: "orange",
        borderWidth: 10,
        height: "10%",
        justifyContent: "center",
        flexDirection: "row",
        
    }    

})
