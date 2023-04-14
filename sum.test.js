const sum = require("./sum");

describe('soma', () => {
    it('1+2 equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
    it('3+ 2 equal 5', () => {
        expect(sum(3, 2)).toBe(5);
    })
})
