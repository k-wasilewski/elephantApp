var contact = document.createElement("div");
contact.classList.add('main')
contact.classList.add('hidden')
document.querySelector('#mainDiv').appendChild(contact)

import('../func/appendDiv').then(function (module) {
    const newDiv = module.func(contact, '30%')
    const name = document.createElement('p')
    name.innerText = 'Kuba Wasilewski'
    const mail = document.createElement('a')
    mail.innerText = 'k.k.wasilewski@gmail.com'
    mail.href = 'mailto:k.k.wasilewski@gmail.com'
    mail.appendChild(document.createElement('br'))
    const github = document.createElement('a')
    github.innerText = 'github.com/k-wasilewski'
    github.href = 'https://github.com/k-wasilewski'
    newDiv.appendChild(name)
    newDiv.appendChild(mail)
    newDiv.appendChild(github)
    newDiv.style.fontSize = '2em'
})

module.exports = contact;