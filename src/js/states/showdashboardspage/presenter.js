const stateShowDashboardsPagePresenter = async (message) => {
    debug(`stateShowDashboardsPagePresenter()`)
    const model = await stateShowDashboardsPageModel(message)
    const view = await stateShowDashboardsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

