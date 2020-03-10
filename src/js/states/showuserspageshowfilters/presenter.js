const stateShowUsersPageShowFiltersPresenter = async () => {
    debug(`stateShowUsersPageShowFiltersPresenter()`)
    const model = await stateShowUsersPageShowFiltersModel()
    const view = await stateShowUsersPageShowFiltersView(model)
    // AddEvenListener, innerHTML or Call Another State.
    const elementEntrypoint = 'div#show-filters'
    waitForElement({ "selector": elementEntrypoint }, () => {
        document.querySelector(elementEntrypoint).innerHTML = view
    })
    stateShowUsersPageContent(model)
}

