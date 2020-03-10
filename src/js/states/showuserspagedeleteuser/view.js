const stateShowUsersPageDeleteUserView = async (obj) => {
    debug(`stateShowUsersPageDeleteUserView()`)

    return obj["deleted"] ? null :`<span id="delete-user-status-message">Fetch Error</span>`
}

