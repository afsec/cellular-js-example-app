const stateShowUsersPagePresenter = async () => {
    debug(`stateShowUsersPagePresenter()`)
    const model = await stateShowUsersPageModel()
    const view = await stateShowUsersPageView(model)
    // AddEvenListener, innerHTML or Call Another State.

    // * Render Barebone page and calls ShowFilters
    const pageContentEntrypoint = 'div#page-content'
    waitForElement({ "selector": pageContentEntrypoint }, () => {
        document.querySelector(pageContentEntrypoint).innerHTML = view
        // Run another state with data travel (`model`)
        stateShowUsersPageShowFilters()
    })

    const NewUserBtnEntrypoint = 'button#new-user'
    waitForElement({ "selector": NewUserBtnEntrypoint }, () => {
        // * Render Button: New
        document.querySelector(NewUserBtnEntrypoint).addEventListener('click', () => {
            stateShowUsersPageNewUser()
        })
    })

}
