const stateShowUsersPagePresenter = async (message) => {
    debug(`stateShowUsersPagePresenter()`)
    const model = await stateShowUsersPageModel(message)
    const view = await stateShowUsersPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    const pageContentEntrypoint = 'div#page-content'
    waitForElement({ "selector": pageContentEntrypoint }, () => {
        document.querySelector(pageContentEntrypoint).innerHTML = view
        // Run another state with data travel (`model`)
        stateShowUsersPageShowFilters(currentState, null)
    })

    const NewUserBtnEntrypoint = 'button#new-user'
    waitForElement({ "selector": NewUserBtnEntrypoint }, () => {
        // * Render Button: New
        document.querySelector(NewUserBtnEntrypoint).addEventListener('click', () => {
            stateShowUsersPageNewUser(currentState, null)
        })
    })
}

