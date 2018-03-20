/**
 * Revealing module pattern
 * 
 * Exposing only the properties and methods you want to use in returned object
 */

var greeting = 'Hello World!!!!';

var greet = function() {
    console.log(greeting)
}

module.exports = {
    greet: greet
};