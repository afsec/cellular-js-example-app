const stateShowUsersPagePresenter = () => {
    debug(`stateShowUsersPagePresenter()`)
    const model = stateShowUsersPageModel()
    const view = stateShowUsersPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

