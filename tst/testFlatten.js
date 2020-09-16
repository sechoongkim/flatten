const flatten = require('../index').flatten;
var expect = require('chai').expect;
import chai from 'chai';

 

describe('flatten()', () => {
  describe('flatten an already flattened array', () => {
    it('should not mutate an already flattened array', (done) => {
		expect(flatten([1,2,3])).to.eql([1,2,3]);
        done();
    });
  });

  describe('Flatten a nested array', () => {
    it('should flatten a nested array', (done) => {
		expect(flatten([[1,2,[3]],4])).to.eql([1,2,3,4]);
        done();
    });
  });

  describe('Invalid input', () => {
    it('should throw an exception when input is not an array', (done) => {
       chai.expect(flatten.bind("foo")).to.throw("Input is not valid");
        done();
    });
  });
});