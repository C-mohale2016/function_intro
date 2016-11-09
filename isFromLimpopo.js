// importing assert module
const assert = require ('assert');
var isFromLimpopo = function (regNum){
  var Limpopo = regNum.startsWith ('DRT');
  var Limpopo = regNum.endsWith ('L');
  // printing out the variable value of Limpopo
  console.log(Limpopo);
  // returning the results of Limpopo
  return Limpopo;

};
// identifying my assert
assert.equal = (isFromLimpopo('DRT 122 L'), true);
assert.equal = (isFromLimpopo('BCT 144 J'), false);
