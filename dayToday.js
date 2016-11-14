// importing assert module
const assert = require('assert');

function dayToday(){
  const date = new Date('2016-11-14');
  var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  //return index between 0 and 6
  // console.log(date.getDay());

  //look up the week day text string from the Array
  // console.log(weekDays[date.getDay()]);
  return weekDays[date.getDay()];

};
assert.equal(dayToday(), 'Monday');
