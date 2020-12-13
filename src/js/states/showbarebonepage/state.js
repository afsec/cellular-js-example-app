const stateShowBareBonePage = (sender, message) => {
    // DESC: ...
    debug(`stateShowBareBonePage()`)
    const currentState = "ShowBareBonePage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "Home"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowBareBonePagePresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

