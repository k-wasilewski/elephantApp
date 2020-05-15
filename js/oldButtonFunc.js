module.exports = {
    func: function (oldButton) {
        import("./newButton.js")
            .then(function(module) {
                oldButton.innerHTML = "new button was appended"
                const appendedButton = module.default;
                oldButton.parentNode.appendChild(appendedButton)
                console.log(oldButton+' clicked')
            });

        return oldButton
    }
}

