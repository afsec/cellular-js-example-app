const stateShowDepartmentsPagePresenter = () => {
    debug(`stateShowDepartmentsPagePresenter()`)
    const model = stateShowDepartmentsPageModel()
    const view = stateShowDepartmentsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

