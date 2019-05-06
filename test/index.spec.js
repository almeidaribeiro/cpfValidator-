/*eslint-disable no-undef */

let chai = require('chai');
let expect = chai.expect;
let cpfValidator =require('../lib/index');

describe('cpf lib', () => {
  describe('cpfValidator', () =>{
    it('it should be true', () => {
      expect(cpfValidator.cpfValidator('64695823039')).to.equal(true);
    });
    it('it should be true', () =>{
      expect(cpfValidator.cpfValidator('13519891034')).to.equal(true);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator('64695823035')).to.equal(false);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator('11111111111')).to.equal(false);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator('333333333333')).to.equal(false);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator('57575757575')).to.equal(false);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator('abcdefjklmn')).to.equal(false);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator('53559 200040')).to.equal(false);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator('gabriele')).to.equal(false);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator('99999999')).to.equal(false);
    });
    it('it should be false', () =>{
      expect(cpfValidator.cpfValidator(13519891034)).to.equal(false);
    });
  });
});