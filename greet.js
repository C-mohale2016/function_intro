const assert = require('assert');
var greet = function(name){
  console.log('hi,'+ name)
  return 'hi, '+ name;


};
greet('Jabu');
 assert.equal(greet('Jabu'), 'hi, Jabu');
