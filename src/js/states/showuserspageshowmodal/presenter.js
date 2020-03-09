const stateShowUsersPageShowModalPresenter = async (event) => {
    debug(`stateShowUsersPageShowModalPresenter()`)
    const model = await stateShowUsersPageShowModalModel(event)
    const view = await stateShowUsersPageShowModalView(model)
    // AddEvenListener, innerHTML or Call Another State.
    const modalEntrypoint = 'div#users-modal'
    waitForElement({ "selector": `${modalEntrypoint}` }, () => {
        document.querySelector(modalEntrypoint).innerHTML = view
    })

    const modalRendered = 'span#rendered-modal'
    waitForElement({ "selector": `${modalRendered}` }, () => {
        eval(`UIkit.modal("${modalEntrypoint}").toggle()`);
        // * Highlight current line
        event.parentNode.classList.add("uk-active");
        // * Clear highlighted lines on modal `hide` event
        const code = `UIkit.util.on("${modalEntrypoint}", "hide", () => {
            document.querySelectorAll('.uk-active').forEach((element) => {
                element.classList.remove("uk-active")
            })
        })`
        eval(code)
    })
}

