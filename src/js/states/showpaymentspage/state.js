const stateShowPaymentsPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowPaymentsPage()`)
    const currentState = "ShowPaymentsPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowProfileMenu"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowPaymentsPagePresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

