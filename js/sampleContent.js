var sampleContent = document.createElement("img");
sampleContent.classList.add('main')
sampleContent.src = require("../img/ele.png")
sampleContent.classList.add('hidden')
document.querySelector('#mainDiv').appendChild(sampleContent)

module.exports = sampleContent;