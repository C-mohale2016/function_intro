function regCheck(regNum,location){
  var carReg = regNum.endsWith(location);
  // console.log(carReg);
  return carReg;

};
// calling my function
regCheck('NNL 936 GP', 'GP');
regCheck('CNA 817 L', 'L');
regCheck('DNC 648 EC', 'EC');
regCheck('CDS 799 MP', 'MP');
