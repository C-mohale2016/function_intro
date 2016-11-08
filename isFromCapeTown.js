// importing assert module
const assert = require ('assert');

var isFromCapeTown = function (regNum){
  var CapeTown = regNum.startsWith ('CA');
  var CapeTown = regNum.endsWith ('CA');
// printing out my value and returning it
  console.log(CapeTown);
  return CapeTown;
};

// identifying my assert
assert.equal (isFromCapeTown('CA'), true);
assert.equal (isFromCapeTown('CJ'), false);
