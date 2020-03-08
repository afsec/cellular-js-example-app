const stateShowConfigurationPagePresenter = () => {
    debug(`stateShowConfigurationPagePresenter()`)
    const model = stateShowConfigurationPageModel()
    const view = stateShowConfigurationPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

