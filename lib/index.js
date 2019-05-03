function cpfValidator(cpf){
    let cpfStr = parseInt('');

    cpfStr.map(function(elem) {
        let sum = 0;
        let module = 0;

        sum = sum + parseInt(cpfStr.substring(i - 1, i))*(11-i);
        module = (sum * 10) % 11;
        if ((modulo === 10) || (module === 11))
            module = 0;
        if (module !== parseInt(cpfStr(9, 10)))
            return false;
        
            sum = 0 
    });
}

module.exports.cpfValidator = cpfValidator;


