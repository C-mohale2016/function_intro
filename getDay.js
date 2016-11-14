// importing assert module
const assert = require('assert');

// declaring my function name getDay
function getDay(){
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var day = new Date();

  return weekDays[day.getDay()];


};
// console.log(getDay());
assert.equal(getDay(), 'Monday');
