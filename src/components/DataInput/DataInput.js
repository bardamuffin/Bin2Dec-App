import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

//https://www.culture-informatique.net/conversion-binaire-decimal-hexadecimal-main/
//
export default class DataInput extends Component {
    state = { binary: '' }
    handleBinaryChange = (val) => {
        
        let lastChar = val.slice(-1);
        //max length: 8 digit
        //accept only 1 or 0 
        if( val.length < 9 && lastChar == '0' || lastChar == '1') {
            this.setState({
                binary: val
            })
            console.log("changed: " + val.slice(-1))
        } 
            
    }
    convertBinToDec = (val) => {
        //TODO: Convert Binary to Decimal
        //slice() take two digit, should take only 1
        console.log("-------------PARSING-------------")
        let dec = 0;
        let step = 1;
        for(let i = val.length; i > 0; i--)  {
            console.log("STEP: " + i)
            console.log("val vaut: " + val);
            console.log("val length: " + val.length);
            console.log("val slice: " + i+ " val: " + val.slice(i - 1))
            console.log("val slice parse: " + parseInt(val.slice(i - 1),10))
            console.log("multiplied: " +step)
            console.log("DEC: " + dec + " + " + parseInt(val.slice(i - 1),10) * step )
            dec = dec + parseInt(val.slice(i - 1),10) * step;
            step *= 2;
            console.log("END STEP: " + i)
        }
        console.log("-------------END-------------")
        return dec;
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.binary != this.state.binary) {
            console.log("different state---processing ....");
            console.log("converted: " + this.convertBinToDec(this.state.binary))
        }
    }
    convertDecToBin = (val) => {
        //TODO: convert decimal to binary
    }
 
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textInput}>
                    <TextInput 
                        style={styles.text}
                        value={this.state.binary}
                        keyboardType="numeric"
                        onChangeText={(val) => this.handleBinaryChange(val)}>    
                    </TextInput>
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

