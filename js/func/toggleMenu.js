module.exports = {
    func: function () {
        import("../menu/menuItems.js")
            .then(function(module) {
                const menuItems = module.default;
                import('./toggleVisibility')
                    .then(function (module) {
                        module.func(menuItems)
                    })
            });

        return menuItems
    }
}

