const stateShowUsersPageUpdateUserPresenter = async (data) => {
    debug(`stateShowUsersPageUpdateUserPresenter()`)
    const model = await stateShowUsersPageUpdateUserModel(data)
    const view = await stateShowUsersPageUpdateUserView(model)
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

