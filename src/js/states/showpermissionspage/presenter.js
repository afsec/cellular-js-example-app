const stateShowPermissionsPagePresenter = () => {
    debug(`stateShowPermissionsPagePresenter()`)
    const model = stateShowPermissionsPageModel()
    const view = stateShowPermissionsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

