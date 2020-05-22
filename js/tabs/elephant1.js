var elephant1 = document.createElement("div");
var elephant = document.createElement('img')
elephant1.classList.add('main')
elephant.src = require("../../img/ele.png")
elephant1.classList.add('hidden')
document.querySelector('#mainDiv').appendChild(elephant1)

import('../func/appendDiv').then(function (module) {
    const leftDiv = module.func(elephant1, '30%')
    leftDiv.innerText = 'This is the first elephant'
    leftDiv.style.fontSize = '2em'

    const rightDiv = module.func(elephant1, '70%')
    rightDiv.appendChild(elephant)
})

module.exports = elephant1;