describe("printer specification", () => {
    it('console.log greeting', () => {
        console.log = jest.fn();
        require("../js/printer.js");

        expect(console.log).toHaveBeenCalledWith('siemanko w pliku printer.js');
    });
});