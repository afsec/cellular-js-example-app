const stateShowMessagesPagePresenter = () => {
    debug(`stateShowMessagesPagePresenter()`)
    const model = stateShowMessagesPageModel()
    const view = stateShowMessagesPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

