const stateShowYourDataPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowYourDataPage()`)
    const currentState = "ShowYourDataPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowProfileMenu"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowYourDataPagePresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

