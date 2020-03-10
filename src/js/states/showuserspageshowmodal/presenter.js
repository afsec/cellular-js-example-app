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


    // TODO: Get data from modal fields
    //input id="user-id"
    // TODO: Rename `domElement` variable to `domElement`
    //////////////////////////////////////////////////////////////////
    // TODO: addEventListener according with recpective `role`
    const nextState = (roleName) => {
        debug('nextState()')

        const roleToFunc = {
            // "name": modalText,
            // "email": modalText,
            // "department": modalSelect,
            // "permission": modalSelect,
            // "status": modalSelect,
            "delete": stateShowUsersPageDeleteUser
        }

        // Go to  Next State to interact with Serve-side (Backend)
        roleToFunc[roleName](model)
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

