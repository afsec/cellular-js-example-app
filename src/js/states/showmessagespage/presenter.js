const stateShowMessagesPagePresenter = async (message) => {
    debug(`stateShowMessagesPagePresenter()`)
    const model = await stateShowMessagesPageModel(message)
    const view = await stateShowMessagesPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

