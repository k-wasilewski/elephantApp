var oldButton = document.createElement("button");
oldButton.id = 'oldButton'
oldButton.innerHTML = "lazily append new button";

oldButton.onclick = function () {
    import('./oldButtonFunc').then(function (module) {
        module.func(oldButton)
    })
}

module.exports = oldButton