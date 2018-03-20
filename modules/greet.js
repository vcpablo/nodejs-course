/**
 * In JavaScript when a variable is EQUAL to a thing, another point in memory is created
 */
exports = function() {
    console.log( 'Hello' )
}

console.log(exports);
console.log(module.exports);