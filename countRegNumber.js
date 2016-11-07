function countRegNumber(registration) {
  var regList = registration.split(',');
  return regList.length;

}
const assert = require('assert');
var regCount = countRegNumber ('CA 182736,CY 523519,CJ 812328');
assert.equal(regCount, 3);
