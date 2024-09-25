const numberOfDigits = (num)=>{
    return Math.floor(Math.log10(num) + 1);
}

module.exports = numberOfDigits