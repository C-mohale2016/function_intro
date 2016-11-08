// importing assert module
const assert = require ('assert');

var isFromPaarl = function (regNum){
  var Paarl = regNum.startsWith ('CJ');
  var Paarl = regNum.endsWith ('CJ');

  console.log(Paarl);
  return Paarl;

};
// identifying my assert
assert.equal (isFromPaarl('CJ'), true);
assert.equal (isFromPaarl('CD'), false);
