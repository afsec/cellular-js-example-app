const stateShowBareBonePagePresenter = async (message) => {
    debug(`stateShowBareBonePagePresenter()`)
    const model = await stateShowBareBonePageModel(message)
    const view = await stateShowBareBonePageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#app" }, () => {
        // Render current state
        document.querySelector('div#app').innerHTML = view

        // Load next state
        stateShowAdminPanel(currentState, null)
    })
}

