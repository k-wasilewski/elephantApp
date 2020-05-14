var oldButton = document.createElement("button");
oldButton.id = 'oldButton'
oldButton.innerHTML = "lazily append new button";

oldButton.onclick = function () {
    const that = this;

    //for es2015
    import("./newButton.js")
        .then(function(module) {
            const appendedButton = module.default;
            that.parentNode.appendChild(appendedButton)
        });

    //for node.js
    /*require('./newButton').then(function (module) {
        const appendedButton = module.default;
        that.parentNode.appendChild(appendedButton)
    });*/

}

module.exports = oldButton