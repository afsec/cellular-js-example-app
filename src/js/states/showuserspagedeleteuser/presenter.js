const stateShowUsersPageDeleteUserPresenter = async (data) => {
    debug(`stateShowUsersPageDeleteUserPresenter()`)
    const model = await stateShowUsersPageDeleteUserModel(data)
    const view = await stateShowUsersPageDeleteUserView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const showError = (error) => {
        // TODO: Render a time defined fade message inside modal
        debug('showError()')
        console.error(error)
    }

    if (model["deleted"]) {
        const modalEntrypoint = 'div#users-modal'
        waitForElement({ "selector": `${modalEntrypoint}` }, () => {
            eval(`UIkit.modal("${modalEntrypoint}").toggle()`);
            stateShowUsersPageShowFilters()
        })
    } else {
        showError(view)
    }
}

