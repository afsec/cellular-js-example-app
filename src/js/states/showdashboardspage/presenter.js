const stateShowDashboardsPagePresenter = () => {
    debug(`stateShowDashboardsPagePresenter()`)
    const model = stateShowDashboardsPageModel()
    const view = stateShowDashboardsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

