const stateShowLogoutPagePresenter = async (message) => {
    debug(`stateShowLogoutPagePresenter()`)
    const model = await stateShowLogoutPageModel(message)
    const view = await stateShowLogoutPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
        setTimeout(() => {
            window.location.href="/"
        }, 3000)
    })
}

