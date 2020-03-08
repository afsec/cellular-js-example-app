const stateShowPaymentsPagePresenter = () => {
    debug(`stateShowPaymentsPagePresenter()`)
    const model = stateShowPaymentsPageModel()
    const view = stateShowPaymentsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

