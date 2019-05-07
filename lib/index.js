function isValidInput(strCpf){
  const invalidCpf = [
      '01234567890', 
      '00000000000', 
      '11111111111',
      '22222222222',
      '33333333333', 
      '44444444444',
      '55555555555',
      '66666666666', 
      '77777777777',
      '88888888888', 
      '99999999999'
    ];
  
  const isString = typeof strCpf === 'string';
  const isBlackListed = invalidCpf.includes(strCpf);
  
  if (!isString || isBlackListed) {
    return false;
  }
  strCpf = strCpf.replace(/[^0-9]/g, '');
  const isIncorretSize = strCpf.length !== 11;
  if(isIncorretSize) {
    return false
  }
  return true
}

function isCpfValid(strCpf){
  strCpf = strCpf.replace(/[^0-9]/g, '');
  strCpf = strCpf.split('');
  //dividi a string
  const sum = (accumulator, currentValue) => accumulator + currentValue;
  // soma dos dígitos com uma função que vai passar pelo reduce. A função acumula os valores somados e retorna.
  let tmp = strCpf.slice(0, 9).map((value, index) => {
    return parseInt(value * (10 - index));
  });
  let digit = (tmp.reduce(sum) % 11) < 2 ? 0 : 11 - (tmp.reduce(sum) % 11);
  // o reduce vai passar por todos elementos aplicando a função sum. Ele vai comparar o resultado, se for menor que 2 vale 0, senão é 11 menos o módulo.
  if (parseInt(strCpf[9]) !== digit) {
    return false;
  }
  tmp = strCpf.slice(0, 10).map((value, index) => {
    return parseInt(value * (11 - index));
  });
  digit = (tmp.reduce(sum) % 11) < 2 ? 0 : 11 - (tmp.reduce(sum) % 11);
  if (parseInt(strCpf[10]) !== digit) {
    return false;
  }
  return true
}

function cpfValidator(strCpf) {
  if(isValidInput(strCpf) === false){
    return false
  }
  if(isCpfValid(strCpf) === true){
    return true
  }
  return false;
}
 
module.exports.cpfValidator = cpfValidator;

