const stateShowConfigurationPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowConfigurationPage()`)
    const currentState = "ShowConfigurationPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "Dispatcher"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowConfigurationPagePresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

