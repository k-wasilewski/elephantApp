var oldButton = document.createElement("button");
oldButton.innerHTML = "lazily append new button";
//for node.js
/*var requireAsync = function (module, callback) {
    require(module).initialize(callback);
};*/

oldButton.onclick = function () {
    const that = this;
    import("./newButton.js")     //doesn't work in node.js
        .then(function(module) {
            const appendedButton = module.default;
            //mydiv.append(appendedButton);
            that.parentNode.appendChild(appendedButton)
        });

    //node.js ?
    /*requireAsync(require('./button'), function (module) {
        const appendedButton = module.default;
        mydiv.append(appendedButton);
    })*/
}

module.exports = oldButton