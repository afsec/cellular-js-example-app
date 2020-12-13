const stateShowUsersPageShowModalPresenter = async (domElement) => {
    debug(`stateShowUsersPageShowModalPresenter()`)
    const model = await stateShowUsersPageShowModalModel(domElement)
    const view = await stateShowUsersPageShowModalView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const roleName = domElement.getAttribute("role")

    const modalEntrypoint = 'div#users-modal'
    waitForElement({ "selector": `${modalEntrypoint}` }, () => {
        document.querySelector(modalEntrypoint).innerHTML = view
    })

    const nextState = async (roleName) => {
        debug('nextState()')

        const roleToFunc = {
            "name": stateShowUsersPageUpdateUser,
            "email": stateShowUsersPageUpdateUser,
            "department": stateShowUsersPageUpdateUser,
            "permission": stateShowUsersPageUpdateUser,
            "status": stateShowUsersPageUpdateUser,
            "delete": stateShowUsersPageDeleteUser
        }

        if (roleName != "delete") {
            const element = document.querySelector('#update-field')
            const newValue = element.nodeName == 'select' ? element.value / 1 : element.value
            model["updateValue"] = newValue
        }

        // Go to  Next State to interact with Serve-side (Backend)
        roleToFunc[roleName](currentState, model)
    }

    //////////////////////////////////////////////////////////////////

    const renderedModal = 'span#rendered-modal'
    waitForElement({ "selector": `${renderedModal}` }, () => {
        eval(`UIkit.modal("${modalEntrypoint}").toggle()`);
        // * Highlight current line
        domElement.parentNode.classList.add("uk-active");
        // * Clear highlighted lines on modal `hide` domElement
        const code = `UIkit.util.on("${modalEntrypoint}", "hide", () => {
            document.querySelectorAll('.uk-active').forEach((element) => {
                element.classList.remove("uk-active")
            })
        })`
        eval(code)
    })

    const renderedSaveBtn = 'button#modal-ok-btn'
    waitForElement({ "selector": renderedSaveBtn }, () => {
        document.querySelector(renderedSaveBtn).addEventListener('click', () => {
            nextState(roleName)

        })
    })
}

