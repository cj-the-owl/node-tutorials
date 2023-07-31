var myLogModule = require('./Log');

myLogModule.info('Node.js started');

// var msg = require('./Message');
// console.log(msg.SimpleMessage);

var msg = require('./Log');

msg.log('Hello World');

// var person = require('./data');
// console.log(person.firstName + ' ' + person.lastName);

var person = require('./Person.js');

var person1 = new person('James', 'Bond', 'jb@text.com');

console.log(person1.nameAndEmail());