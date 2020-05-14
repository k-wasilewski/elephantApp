const $ = require('jquery');

describe("button specification", () => {
    it('button is added to DOM', () => {
        require('../js/oldButton')
        require('../js/newButton')

        $('#oldButton').click();

        expect($('#newButton').innerHTML).toBe('appended button')
    })

})