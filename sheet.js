function convertDecToBin(val){
    //TODO: convert decimal to binary
    let result = val;
    let reste = '';
    console.log(result)
    console.log("---------- Dec2Bin ----------")
    while (result > 0) {
        console.log()
        //if modulo > 0 then we substract 0.5 because its not round
        reste = String.prototype.concat(result%2, reste);
        result % 2 > 0 ? result = result / 2 - 0.5 : result = result / 2;
        console.log("result: " + result);
        console.log("reste: " + reste);
    }
    console.log("---------- END ----------")
    console.log("result: " + reste);
    return result;
    
}


convertDecToBin(26)