const stateShowProfileMenu = (sender, message) => {
    // DESC: ...
    debug(`stateShowProfileMenu()`)
    const currentState = "ShowProfileMenu"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "BaseTemplate"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowProfileMenuPresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

