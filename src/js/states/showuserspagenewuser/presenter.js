const stateShowUsersPageNewUserPresenter = async () => {
    debug(`stateShowUsersPageNewUserPresenter()`)
    const model = await stateShowUsersPageNewUserModel()
    const view = await stateShowUsersPageNewUserView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const modalEntrypoint = 'div#users-modal'
    waitForElement({ "selector": `${modalEntrypoint}` }, () => {
        document.querySelector(modalEntrypoint).innerHTML = view
    })

    const modalRendered = 'span#rendered-modal'
    waitForElement({ "selector": `${modalRendered}` }, () => {
        eval(`UIkit.modal("${modalEntrypoint}").toggle()`)
    })
}

