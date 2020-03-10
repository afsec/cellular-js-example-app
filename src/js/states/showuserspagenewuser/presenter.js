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

    let dataForm = {}

    const saveFormBtn = 'button#save-form'
    waitForElement({ "selector": saveFormBtn }, () => {
        // * Button: Save
        document.querySelector(saveFormBtn).addEventListener('click', () => {
            document.querySelectorAll('.form-field').forEach((element) => {
                const key = element.getAttribute("role")
                const value = element.nodeName == 'select' ? element.value / 1 : element.value
                dataForm[key] = value
            })
            stateShowUsersPageNewUserSave(dataForm)
        })
    })
}

