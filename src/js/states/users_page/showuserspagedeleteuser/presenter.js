const stateShowUsersPageDeleteUserPresenter = async (message) => {
    debug(`stateShowUsersPageDeleteUserPresenter()`)
    const model = await stateShowUsersPageDeleteUserModel(message)
    const view = await stateShowUsersPageDeleteUserView(model)
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

