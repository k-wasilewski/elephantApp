module.exports = {
    func: function (oldButton) {
        const that = this;

        import("./newButton.js")
            .then(function(module) {
                oldButton.innerHTML = "new button was appended"
                const appendedButton = module.default;
                oldButton.parentNode.appendChild(appendedButton)
                console.log('inside oldButtonFunc')
            });
        }
}

