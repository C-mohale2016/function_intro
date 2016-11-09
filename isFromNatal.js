// importing assert module
const assert = require ('assert');
// declaring my function
var isFromNatal = function (regNum){
  var Natal = regNum.startsWith ('ND');
  console.log(Natal);
  // returning results for Natal true
  return Natal;

};
// identifying my assert
assert.equal = (isFromNatal('ND 45012'), true);
assert.equal = (isFromNatal('MD 65846'), false);
