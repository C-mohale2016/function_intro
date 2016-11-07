const assert = require('assert');
var greet = function(name){
  console.log('hi,'+ name);
  return 'hi, '+ name;


};
greet('Sibu');
 assert.equal(greet('Sibu'), 'hi, Sibu');
