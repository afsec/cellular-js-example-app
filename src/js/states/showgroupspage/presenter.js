const stateShowGroupsPagePresenter = () => {
    debug(`stateShowGroupsPagePresenter()`)
    const model = stateShowGroupsPageModel()
    const view = stateShowGroupsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

