module.exports = {
    func: function (element) {
       if (element.classList.contains('main')) {
           Array.from(document.getElementById('mainDiv').children).forEach(item => {
               if (!item.classList.contains('hidden')) {
                   item.classList.add('hidden')
               }
           })
       }

        element.classList.toggle('hidden');
    }
}

