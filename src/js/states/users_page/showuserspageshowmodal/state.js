const stateShowUsersPageShowModal = (sender, message) => {
    // DESC: ...
    debug(`stateShowUsersPageShowModal()`)
    const currentState = "ShowUsersPageShowModal"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowUsersPageContent",
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowUsersPageShowModalPresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

