var menuBtn = document.createElement("img");
menuBtn.id = 'menuBtn'
menuBtn.src = '../img/menu.svg';

menuBtn.onclick = function () {
    import('../func/toggleMenu').then(function (module) {
        module.func()
    })
}

module.exports = menuBtn