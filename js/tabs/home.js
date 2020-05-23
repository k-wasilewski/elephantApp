var home = document.createElement("div");
home.classList.add('main')
document.querySelector('#mainDiv').appendChild(home)

import('../func/appendDiv').then(function (module) {
    let newDiv = module.func(home, '30%')
    newDiv.innerText = 'Welcome to my elephant js app.'
    newDiv.style.fontSize = '2em'
})

module.exports = home;