const stateShowYourDataPagePresenter = async (message) => {
    debug(`stateShowYourDataPagePresenter()`)
    const model = await stateShowYourDataPageModel(message)
    const view = await stateShowYourDataPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

