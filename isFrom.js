function isFrom (regNum,location){
  var results = regNum.startsWith(location);
  return results;

};
isFrom ('CA 977965', 'CA');
isFrom ('ND 198545', 'ND');
