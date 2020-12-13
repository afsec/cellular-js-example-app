const stateShowDepartmentsPage = (sender, message) => {
    // DESC: ...
    debug(`stateShowDepartmentsPage()`)
    const currentState = "ShowDepartmentsPage"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowAdminPanel"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowDepartmentsPagePresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

