 module.exports = function reverse (n) {
   
    let temp = n.toString().split('').reverse().join('')
    return parseInt(temp)
}