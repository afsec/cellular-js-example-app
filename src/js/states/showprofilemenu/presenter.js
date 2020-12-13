const stateShowProfileMenuPresenter = async (message) => {
    debug(`stateShowProfileMenuPresenter()`)
    const model = await stateShowProfileMenuModel(message)
    const view = await stateShowProfileMenuView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#user-menu" }, () => {
        document.querySelector('div#user-menu').innerHTML = view
    })

    // waitForElement({ "selector": "a#dashboards" }, () => {
    //     document.querySelector('a#dashboards').addEventListener('click', () => {
    //         stateShowDashboardsPage(currentState, null)
    //     })
    // })

    // waitForElement({ "selector": "a#payments" }, () => {
    //     document.querySelector('a#payments').addEventListener('click', () => {
    //         stateShowPaymentsPage(currentState, null)
    //     })
    // })

    // waitForElement({ "selector": "a#configuration" }, () => {
    //     document.querySelector('a#configuration').addEventListener('click', () => {
    //         stateShowConfigurationPage(currentState, null)
    //     })
    // })

    // waitForElement({ "selector": "a#your-data" }, () => {
    //     document.querySelector('a#your-data').addEventListener('click', () => {
    //         stateShowYourDataPage(currentState, null)
    //     })
    // })

    // waitForElement({ "selector": "a#logout" }, () => {
    //     document.querySelector('a#logout').addEventListener('click', () => {
    //         stateShowLogoutPage(currentState, null)
    //     })
    // })
}

