const stateShowUserMenuPresenter = () => {
    debug(`stateShowUserMenuPresenter()`)
    const model = stateShowUserMenuModel()
    const view = stateShowUserMenuView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#user-menu" }, () => {
        document.querySelector('div#user-menu').innerHTML = view
    })

    waitForElement({ "selector": "a#dashboards" }, () => {
        document.querySelector('a#dashboards').addEventListener('click', () => {
            stateShowDashboardsPage()
        })
    })

    waitForElement({ "selector": "a#payments" }, () => {
        document.querySelector('a#payments').addEventListener('click', () => {
            stateShowPaymentsPage()
        })
    })

    waitForElement({ "selector": "a#configuration" }, () => {
        document.querySelector('a#configuration').addEventListener('click', () => {
            stateShowConfigurationPage()
        })
    })

    waitForElement({ "selector": "a#your-data" }, () => {
        document.querySelector('a#your-data').addEventListener('click', () => {
            stateShowYourDataPage()
        })
    })

    waitForElement({ "selector": "a#logout" }, () => {
        document.querySelector('a#logout').addEventListener('click', () => {
            stateShowLogoutPage()
        })
    })

}

