const stateShowUsersPageShowModalPresenter = async (event) => {
    debug(`stateShowUsersPageShowModalPresenter()`)
    const model = await stateShowUsersPageShowModalModel(event)
    const view = await stateShowUsersPageShowModalView(model)
    // AddEvenListener, innerHTML or Call Another State.

    const elementSelector = 'div#users-modal'
    waitForElement({ "selector": `${elementSelector}` }, () => {
        document.querySelector(elementSelector).innerHTML = view
        eval(`UIkit.modal("${elementSelector}").toggle()`);
    })
}

