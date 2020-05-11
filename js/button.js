var button = document.createElement("button");
button.innerHTML = "appended button";
button.onclick = function () {
    console.log('appended button clicked');
}

module.exports = button;