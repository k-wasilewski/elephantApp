var elephant2 = document.createElement("div");
var elephant = document.createElement('img')
elephant2.classList.add('main')
elephant.src = require("../../img/ele2.png")
elephant.style.width = '50%'
elephant2.classList.add('hidden')
document.querySelector('#mainDiv').appendChild(elephant2)

import('../func/appendDiv').then(function (module) {
    const leftDiv = module.func(elephant2, '30%')
    leftDiv.innerText = 'This is the second elephant'
    leftDiv.style.fontSize = '2em'

    const rightDiv = module.func(elephant2, '70%')
    rightDiv.appendChild(elephant)
})

module.exports = elephant2;