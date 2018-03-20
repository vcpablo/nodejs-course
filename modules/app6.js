// immediately invoked function expressions (IIFE)
var firstname = 'jane';

(function (lastname) {
    var firstname = 'john ' + lastname;
    console.log(firstname);
}('doe'));


console.log(firstname)