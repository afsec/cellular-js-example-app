const stateShowYourDataPagePresenter = () => {
    debug(`stateShowYourDataPagePresenter()`)
    const model = stateShowYourDataPageModel()
    const view = stateShowYourDataPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

