const stateShowPermissionsPagePresenter = async (message) => {
    debug(`stateShowPermissionsPagePresenter()`)
    const model = await stateShowPermissionsPageModel(message)
    const view = await stateShowPermissionsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

