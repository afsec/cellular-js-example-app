const stateShowUsersPageNewUserSavePresenter = async (message) => {
    debug(`stateShowUsersPageNewUserSavePresenter()`)
    const model = await stateShowUsersPageNewUserSaveModel(message)
    const view = await stateShowUsersPageNewUserSaveView(model)
    // AddEvenListener, innerHTML or Call Another State.

    if (model["updated"]) {
        const modalEntrypoint = 'div#users-modal'
        waitForElement({ "selector": `${modalEntrypoint}` }, () => {
            eval(`UIkit.modal("${modalEntrypoint}").toggle()`);
            stateShowUsersPageShowFilters(currentState, null)
        })
    } else {
        debug(view,"ERROR")
    }
}

