const stateShowDepartmentsPagePresenter = async (message) => {
    debug(`stateShowDepartmentsPagePresenter()`)
    const model = await stateShowDepartmentsPageModel(message)
    const view = await stateShowDepartmentsPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
    })
}

