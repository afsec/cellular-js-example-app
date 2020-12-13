const stateShowPaymentsPagePresenter = async (message) => {
    debug(`stateShowPaymentsPagePresenter()`)
    const model = await stateShowPaymentsPageModel(message)
    const view = await stateShowPaymentsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

