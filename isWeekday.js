// const date = new Date('2010-04-01');
// var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Saturday'];
//
// //return index between 0 and 6
// console.log(date.getDay());
//
// //look up the week day text string from the Array
// console.log(weekDays[date.getDay()]);

  // const date = new date('2016-10-11');

const assert = require ('assert');
function isWeekday(day){
  var weekdayDay = !day.startsWith ('S');
  
  return weekdayDay;


};
assert.equal(isWeekday('Wednesday'), true);
