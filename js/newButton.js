var newButton = document.createElement("button");
newButton.innerHTML = "appended button";
newButton.id = "newButton";
newButton.onclick = function () {
    console.log('appended button clicked');
}

module.exports = newButton;