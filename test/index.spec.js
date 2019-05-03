let chai = require('chai');
let expect = chai.expect;
let cpfValidator =require('../lib/index');

describe('cpf lib', () => {
  describe('cpfValidator', () =>{
    it('cpf is valid', () => {
      expect(cpfValidator.cpfValidator('41010270800')).to.equal(true);
    });
    it('cpf is valid', () =>{
      expect(cpfValidator.cpfValidator('41010270805')).to.equal(false);
    });
  });
});