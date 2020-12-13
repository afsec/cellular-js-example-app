const stateShowUsersPageUpdateUserPresenter = async (message) => {
    debug(`stateShowUsersPageUpdateUserPresenter()`)
    const model = await stateShowUsersPageUpdateUserModel(message)
    const view = await stateShowUsersPageUpdateUserView(model)
    // AddEvenListener, innerHTML or Call Another State.
    if (model["deleted"]) {
        const modalEntrypoint = 'div#users-modal'
        waitForElement({ "selector": `${modalEntrypoint}` }, () => {
            eval(`UIkit.modal("${modalEntrypoint}").toggle()`);
            stateShowUsersPageShowFilters(currentState, null)
        })
    } else {
        debug(view, "ERROR")
    }
}

