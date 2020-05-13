describe("calc specification", () => {
    it('add() works accurately', () => {
        var add = require("../js/calc.js");
        expect(add(2, 2)).toEqual(4);
    });
});