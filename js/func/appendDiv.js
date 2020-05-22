module.exports = {
    func: function (element, width) {
        const newDiv = document.createElement('div')
        newDiv.style.width = width
        newDiv.style.float = 'left'

        element.appendChild(newDiv)

        return newDiv
    }
}

