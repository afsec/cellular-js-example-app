const stateShowUsersPageShowFilters = (sender, message) => {
    // DESC: ...
    debug(`stateShowUsersPageShowFilters()`)
    const currentState = "ShowUsersPageShowFilters"

    // ACL: Insert HERE all allowed senders.
    const AccessControlList = [
        "ShowUsersPage",
        "ShowUsersPageNewUserSave",
        "ShowUsersPageDeleteUser",
        "ShowUsersPageUpdateUser"
    ]

    const errorMessage = `CELLULAR_JS - ACL Error: ${sender} cannot send message to ${currentState}. Try insert "${sender}" into ${currentState} AccessControlList at "${currentState.toLowerCase()}/state.js"`
    const isAllowedSender = (sender) => (AccessControlList.indexOf(sender) > -1) ? true : false
    if (isAllowedSender(sender)) {
        stateShowUsersPageShowFiltersPresenter(message)
    } else {
        debug(errorMessage, "ERROR")
    }
}

