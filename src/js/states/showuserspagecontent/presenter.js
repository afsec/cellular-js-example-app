const stateShowUsersPageContentPresenter = async (obj) => {
    debug(`stateShowUsersPageContentPresenter()`)
    const model = await stateShowUsersPageContentModel(obj)
    const view = await stateShowUsersPageContentView(model)
    // AddEvenListener, innerHTML or Call Another State.

    // * Render Users list
    const pageContentEntrypoint = 'tbody#show-users'
    waitForElement({ "selector": pageContentEntrypoint }, () => {
        document.querySelector(pageContentEntrypoint).innerHTML = view
    })

    waitForElement({ "selector": "tr#last-row" }, () => {

        // users-tbody
        // * Icon: Edit
        document.querySelectorAll('td.editable-cell').forEach((tdEditable) => {
            tdEditable.childNodes[3].addEventListener('click', () => {
                stateShowUsersPageShowModal(tdEditable)
            })
        })

        // * Icon: Delete
        document.querySelectorAll('td[role="delete"]').forEach((tdDelete) => {
            tdDelete.childNodes[1].addEventListener('click', () => {
                stateShowUsersPageShowModal(tdDelete)
            })
        })

    })
}

