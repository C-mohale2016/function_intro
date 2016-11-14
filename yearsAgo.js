// importing assert module
const assert = require('assert');
// Declaring my function
var yearsAgo = function(year){
  // converting my parameters/dates
  var today = new Date();
  // inputing builtin function
return today = today.getFullYear() - year;
};
assert.equal(yearsAgo(1995), 21);
