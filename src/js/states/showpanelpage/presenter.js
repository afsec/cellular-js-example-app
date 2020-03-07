const stateShowPanelPagePresenter = () => {
    debug(`stateShowPanelPagePresenter()`)
    const model = stateShowPanelPageModel()
    const view = stateShowPanelPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#app" }, () => {
        document.querySelector('div#app').innerHTML = view
    })

    waitForElement({ "selector": "a#menu-item-users" }, () => {
        document.querySelector('a#menu-item-users').addEventListener('click', () => {
            stateShowUsersPage()
            // debug('Users Page')
        })
    })

    waitForElement({ "selector": "a#menu-item-departments" }, () => {
        document.querySelector('a#menu-item-departments').addEventListener('click', () => {
            stateShowDepartmentsPage()
            // debug('Groups Page')
        })
    })

    waitForElement({ "selector": "a#menu-item-permissions" }, () => {
        document.querySelector('a#menu-item-permissions').addEventListener('click', () => {
            stateShowPermissionsPage()
            // debug('Groups Page')
        })
    })
}

