const stateShowBareBonePagePresenter = () => {
    debug(`stateShowBareBonePagePresenter()`)
    const model = stateShowBareBonePageModel()
    const view = stateShowBareBonePageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#app" }, () => {
        // Render current state
        document.querySelector('div#app').innerHTML = view

        // Load next state
        stateShowAdminPanel()
    })
}

