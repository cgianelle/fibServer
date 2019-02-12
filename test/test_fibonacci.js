const fibonacci = require('../lib/fibonacci');
const expect = require('chai').expect;

describe('Fibonacci Tests', ()=>{
    it('Should verify the sequence values for a given term with the goldenRatioFibonacci function', ()=>{
        expect(fibonacci.goldenRatioFibonacci(0)).to.equal(0);
        expect(fibonacci.goldenRatioFibonacci(1)).to.equal(1);
        expect(fibonacci.goldenRatioFibonacci(2)).to.equal(1);
        expect(fibonacci.goldenRatioFibonacci(3)).to.equal(2);
        expect(fibonacci.goldenRatioFibonacci(4)).to.equal(3);
        expect(fibonacci.goldenRatioFibonacci(5)).to.equal(5);
        expect(fibonacci.goldenRatioFibonacci(6)).to.equal(8);
        expect(fibonacci.goldenRatioFibonacci(7)).to.equal(13);
        expect(fibonacci.goldenRatioFibonacci(8)).to.equal(21);
        expect(fibonacci.goldenRatioFibonacci(9)).to.equal(34);
        expect(fibonacci.goldenRatioFibonacci(19)).to.equal(4181);
        expect(fibonacci.goldenRatioFibonacci(20)).to.equal(6765);
    });

    it('Should verify the sequence values for a given term with the recursiveFibonacci function', ()=>{
        expect(fibonacci.recursiveFibonacci(0)).to.equal(0);
        expect(fibonacci.recursiveFibonacci(1)).to.equal(1);
        expect(fibonacci.recursiveFibonacci(2)).to.equal(1);
        expect(fibonacci.recursiveFibonacci(3)).to.equal(2);
        expect(fibonacci.recursiveFibonacci(4)).to.equal(3);
        expect(fibonacci.recursiveFibonacci(5)).to.equal(5);
        expect(fibonacci.recursiveFibonacci(6)).to.equal(8);
        expect(fibonacci.recursiveFibonacci(7)).to.equal(13);
        expect(fibonacci.recursiveFibonacci(8)).to.equal(21);
        expect(fibonacci.recursiveFibonacci(9)).to.equal(34);
        expect(fibonacci.recursiveFibonacci(19)).to.equal(4181);
        expect(fibonacci.recursiveFibonacci(20)).to.equal(6765);
    });

});