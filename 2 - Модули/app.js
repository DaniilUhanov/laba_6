const os = require('os');
const greeting = require('./greeting');
const User = require('./user.js');

let eugene = new User('Eugene', 32);
eugene.sayHi(); 
let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName)); 