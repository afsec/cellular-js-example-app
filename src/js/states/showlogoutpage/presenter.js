const stateShowLogoutPagePresenter = () => {
    debug(`stateShowLogoutPagePresenter()`)
    const model = stateShowLogoutPageModel()
    const view = stateShowLogoutPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
        setTimeout(() => {
            stateShowBareBonePage()
        }, 3000)
    })
}

