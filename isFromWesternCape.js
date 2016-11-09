// importing assert module
const assert = require ('assert');
// declaring my function
var isFromWesternCape = function (regNum){
  var WesternCape = regNum.startsWith ('CY');
  console.log(WesternCape);
  // returning results for WesternCape true
  return WesternCape;

};
// identifying my assert
assert.equal = (isFromWesternCape('CY 17662'), true);
assert.equal = (isFromWesternCape('CI 14876'), false);
