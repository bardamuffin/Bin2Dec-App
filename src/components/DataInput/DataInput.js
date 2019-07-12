import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

//https://www.culture-informatique.net/conversion-binaire-decimal-hexadecimal-main/
//
export default class DataInput extends Component {
    state = { binary: '', dec: '' }
   //TODO: doesn't delete if only one zero or one stay in the input
    handleBinaryChange = (val) => {
        console.log("\n\nsliced: " + val.slice(-1) + "\n\n");
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
        
    //TODO: filter input
    handleDecimalChange= (val) => {
        this.setState({
            dec: val
        })
    }
    
    //TODO: Manage Decimal Binary
    convertBinToDec = (val) => {
        let result = 0;
        let step = 1;
        for( let i = val.length; i > 0; i--) {
            let numb = val.charAt(i-1);
            result += Number.parseInt(numb, 10) * step;
            step *= 2
        }
        return result.toString();
    }
    //TODO: Manage Decimal Binary
    convertDecToBin = (val) => {
        let result = Number.parseInt(val);
        let reste = '';
        while (result > 0) {
            //if modulo > 0 then we substract 0.5 because its not round
            reste = String.prototype.concat(result%2, reste);
            result % 2 > 0 ? result = result / 2 - 0.5 : result = result / 2;
        }
        return reste;
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.binary != this.state.binary) {
            this.setState({
                dec: this.convertBinToDec(this.state.binary)
            })
        }
            
        if(prevState.dec != this.state.dec) {
            this.setState({
                binary: this.convertDecToBin(this.state.dec)
            })
        }
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
                    <TextInput 
                        value="Enter Dec"
                        style={styles.text}
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        value={this.state.dec}
                        keyboardType="numeric"
                        onChangeText={(val) => this.handleDecimalChange(val)}>   
                    </TextInput>
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
    
 
                

                


