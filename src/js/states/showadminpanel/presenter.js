const stateShowAdminPanelPresenter = async (message) => {
    debug(`stateShowAdminPanelPresenter()`)
    const model = await stateShowAdminPanelModel(message)
    const view = await stateShowAdminPanelView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "nav#panel-admin" }, () => {
        document.querySelector('nav#panel-admin').innerHTML = view
        // Load next state
        stateShowProfileMenu(currentState, null)
    })

    waitForElement({ "selector": "a#menu-item-users" }, () => {
        document.querySelector('a#menu-item-users').addEventListener('click', () => {
            stateShowUsersPage(currentState, null)
        })
    })

    waitForElement({ "selector": "a#menu-item-departments" }, () => {
        document.querySelector('a#menu-item-departments').addEventListener('click', () => {
            stateShowDepartmentsPage(currentState, null)
        })
    })

    waitForElement({ "selector": "a#menu-item-permissions" }, () => {
        document.querySelector('a#menu-item-permissions').addEventListener('click', () => {
            stateShowPermissionsPage(currentState, null)
        })
    })

    waitForElement({ "selector": "a#menu-item-messages" }, () => {
        document.querySelector('a#menu-item-messages').addEventListener('click', () => {
            stateShowMessagesPage(currentState, null)
        })
    })
}

