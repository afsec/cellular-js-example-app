const stateShowUsersPagePresenter = async () => {
    debug(`stateShowUsersPagePresenter()`)
    const model = await stateShowUsersPageModel()
    const view = await stateShowUsersPageView(model)
    // AddEvenListener, innerHTML or Call Another State.
    waitForElement({ "selector": "div#page-content" }, () => {
        document.querySelector('div#page-content').innerHTML = view
        stateShowUsersPageShowFilters()
    })

    const someSelector = '#users-table > tbody > tr:nth-child(1) > td:nth-child(3) > a'
    waitForElement({ "selector": "tr#last-row" }, () => {
        document.querySelectorAll('td.editable-cell').forEach((tdEditable) => {
            tdEditable.childNodes[3].addEventListener('click', () => {
                stateShowUsersPageShowModal(tdEditable)
            })
        })
        stateShowUsersPageShowFilters()
    })


}

