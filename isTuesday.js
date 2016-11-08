const assert = require('assert');
var isTuesday = function(day){
  Today = day.startsWith('Tu');
  return Today;
};
assert.equal(isTuesday('Tuesday'), true);
