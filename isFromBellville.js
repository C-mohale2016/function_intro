const assert = require ('assert');
// writing a function called isFromBellville with a registration number that startsWith CY
var isFromBellville = function (regNum){
var Bellville = regNum.startsWith ('CY');
var Bellville = regNum.endsWith ('CY');

console.log(Bellville);
return Bellville;
};

assert.equal(isFromBellville('CY'), true);
assert.equal(isFromBellville('CA'), false);
