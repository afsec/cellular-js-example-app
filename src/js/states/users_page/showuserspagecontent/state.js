const stateShowUsersPageContent = (sender, message) => {
    // DESC: ...
    debug(`stateShowUsersPageContent()`)
    const currentState = "ShowUsersPageContent"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowUsersPageShowFilters"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowUsersPageContentPresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

