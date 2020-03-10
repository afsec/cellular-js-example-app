const stateShowUsersPageNewUserSavePresenter = async (data) => {
    debug(`stateShowUsersPageNewUserSavePresenter()`)
    const model = await stateShowUsersPageNewUserSaveModel(data)
    const view = await stateShowUsersPageNewUserSaveView(model)
    // AddEvenListener, innerHTML or Call Another State.
    const showError = (error) => {
        // TODO: Render a time defined fade message inside modal
        debug('showError()')
        console.error(error)
    }

    if (model["updated"]) {
        const modalEntrypoint = 'div#users-modal'
        waitForElement({ "selector": `${modalEntrypoint}` }, () => {
            eval(`UIkit.modal("${modalEntrypoint}").toggle()`);
            stateShowUsersPageShowFilters()
        })
    } else {
        showError(view)
    }
}

