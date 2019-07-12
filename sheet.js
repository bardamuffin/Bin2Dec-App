function convertDecToBin(val){
    
    let result = val;
    let reste = '';
    while (result > 0) {
        console.log()
        //if modulo > 0 then we substract 0.5 because its not round
        reste = String.prototype.concat(result%2, reste);
        result % 2 > 0 ? result = result / 2 - 0.5 : result = result / 2;
    }
    return result;
}
    
        
    
    


convertDecToBin(26)