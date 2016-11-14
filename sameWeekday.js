// importing assert module
const assert = require('assert');

// Declaring my function name sameWeekday
function sameWeekday(date1,date2){
  var date1 = new Date();
  var date2 = new Date();

  // this should return true
  return date1.getDay() === date2.getDay();

};
// Displaying my boolean that should return my dates both true
// console.log(sameWeekday('2009-05-18', + '2009-05-25'), true);

// defining my assert
assert.equal(sameWeekday('2009-05-18', + '2009-05-25'), true);
