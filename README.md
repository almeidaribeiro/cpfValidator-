# Validador de CPF V.1.0.0

**Esta biblioteca se destina à validação de números de CPF.**
A versão atual é capaz de validar números de CPF (Cadastro de pessoa física). 

## Como instalar:

```shell

$  npm install cpfvalidator-boo

```

## Como utilizar:

```node

> const cpfValidator = require("cpfValidator-boo");
> cpfValidator.cpfValidator("64695823039");
> // returns true;


```

## roadmap oficial do projeto


### versão 1.0.0(released)
- funcionalidades: Validação de sequência numérica de cpf,a entrada deve ser uma string, incluindo ou não caracteres especiais (como ponto e traço)  e com espaços entre os números.	

