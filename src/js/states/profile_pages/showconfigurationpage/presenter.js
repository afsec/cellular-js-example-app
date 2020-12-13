const stateShowConfigurationPagePresenter = async (message) => {
    debug(`stateShowConfigurationPagePresenter()`)
    const model = await stateShowConfigurationPageModel(message)
    const view = await stateShowConfigurationPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

