const numberOfDigits = (num)=>{

    if(num === 0){
        return 1;
    }
    
    return Math.floor(Math.log10(num) + 1);
}

module.exports = numberOfDigits