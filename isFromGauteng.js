// importing assert model
const assert = require ('assert');
// writing a function isFromGauteng that returns the registration number
var isFromGauteng = function (regNum){
  var Gauteng = regNum.startsWith ('DR');
  var Gauteng = regNum.endsWith ('GP');
  // printing out the variable value of Gauteng
  console.log(Gauteng);
  // returning the results of Gauteng
  return Gauteng;

};
// identifying my assert
assert.equal = (isFromGauteng('DR 12 TY GP'), true);
assert.equal = (isFromGauteng('CY 15 JY CA'), false);
