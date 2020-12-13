const stateShowAdminPanel = (sender, message) => {
    // DESC: ...
    debug(`stateShowAdminPanel()`)
    const currentState = "ShowAdminPanel"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowBareBonePage"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowAdminPanelPresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

