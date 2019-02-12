const GOLDEN_RATIO = 1.61803398874989484820;

module.exports = {
    goldenRatioFibonacci(term) {
        return Math.round((Math.pow(GOLDEN_RATIO, term) - Math.pow(1-GOLDEN_RATIO,term)) / Math.sqrt(5));
    },
    recursiveFibonacci(term) {
        if (term === 0) {
            return 0;
        } else if (term === 1) {
            return 1;
        } else {
            return this.recursiveFibonacci(term -1) + this.recursiveFibonacci(term - 2);
        }
    }
}