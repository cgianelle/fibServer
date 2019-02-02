const fibonacci = require('../lib/fibonacci');
const expect = require('chai').expect;

describe('Fibonacci Tests', ()=>{
    it('Should verify the sequence values for a given term', ()=>{
        expect(fibonacci.fibonacci(0)).to.equal(0);
        expect(fibonacci.fibonacci(1)).to.equal(1);
        expect(fibonacci.fibonacci(2)).to.equal(1);
        expect(fibonacci.fibonacci(3)).to.equal(2);
        expect(fibonacci.fibonacci(4)).to.equal(3);
        expect(fibonacci.fibonacci(5)).to.equal(5);
        expect(fibonacci.fibonacci(6)).to.equal(8);
        expect(fibonacci.fibonacci(7)).to.equal(13);
        expect(fibonacci.fibonacci(8)).to.equal(21);
        expect(fibonacci.fibonacci(9)).to.equal(34);
        expect(fibonacci.fibonacci(19)).to.equal(4181);
        expect(fibonacci.fibonacci(20)).to.equal(6765);
    });
});