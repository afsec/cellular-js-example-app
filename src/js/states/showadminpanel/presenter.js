const stateShowAdminPanelPresenter = () => {
    debug(`stateShowAdminPanelPresenter()`)
    const model = stateShowAdminPanelModel()
    const view = stateShowAdminPanelView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "nav#panel-admin" }, () => {
        document.querySelector('nav#panel-admin').innerHTML = view
        // Load next state
        stateShowUserMenu()
    })

    waitForElement({ "selector": "a#menu-item-users" }, () => {
        document.querySelector('a#menu-item-users').addEventListener('click', () => {
            stateShowUsersPage()
        })
    })

    waitForElement({ "selector": "a#menu-item-departments" }, () => {
        document.querySelector('a#menu-item-departments').addEventListener('click', () => {
            stateShowDepartmentsPage()
        })
    })

    waitForElement({ "selector": "a#menu-item-permissions" }, () => {
        document.querySelector('a#menu-item-permissions').addEventListener('click', () => {
            stateShowPermissionsPage()
        })
    })
}

