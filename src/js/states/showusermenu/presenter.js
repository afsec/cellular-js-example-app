const stateShowUserMenuPresenter = () => {
    debug(`stateShowUserMenuPresenter()`)
    const model = stateShowUserMenuModel()
    const view = stateShowUserMenuView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#user-menu" }, () => {
        document.querySelector('div#user-menu').innerHTML = view
    })
}

