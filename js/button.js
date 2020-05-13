var button = document.createElement("button");
button.innerHTML = "appended button";
button.id = "btn";
button.onclick = function () {
    console.log('appended button clicked');
}

module.exports = button;