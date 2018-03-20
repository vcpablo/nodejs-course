var util = require('util');

function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function PoliceMan() {
    Person.call(this);
    this.badgenumber = '1234';
}

util.inherits(PoliceMan, Person);

var officer = new PoliceMan();
officer.greet();