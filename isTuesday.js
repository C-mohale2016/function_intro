const assert = require('assert');
// writing a function called isTuesday that returns a boolean Tuesday
var isTuesday = function(day){
  Today = day.startsWith('Tu');
  return Today;
};
assert.equal(isTuesday('Tuesday'), true);
assert.equal(isTuesday('Friday'), false);
