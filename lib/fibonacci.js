const GOLDEN_RATIO = 1.61803398874989484820;

const calculateFibonacciValue = (term) => {
    return Math.round((Math.pow(GOLDEN_RATIO, term) - Math.pow(1-GOLDEN_RATIO,term)) / Math.sqrt(5));
};

exports.fibonacci = calculateFibonacciValue;