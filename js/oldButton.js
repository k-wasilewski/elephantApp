var oldButton = document.createElement("button");
oldButton.id = 'oldButton'
oldButton.innerHTML = "lazily append new button";

oldButton.onclick = function () {
    import('./oldButtonFunc').then(function (module) {
        module.func(oldButton)
    })
}

/*oldButton.onclick = function () {
    const that = this;

    import("./newButton.js")
        .then(function(module) {
            oldButton.innerHTML = "new button was appended"
            const appendedButton = module.default;
            that.parentNode.appendChild(appendedButton)
        });

}*/

module.exports = oldButton