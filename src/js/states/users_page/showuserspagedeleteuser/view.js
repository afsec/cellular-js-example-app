const stateShowUsersPageDeleteUserView = async (modelResult) => {
    debug(`stateShowUsersPageDeleteUserView()`)
    return modelResult["deleted"] ? null : `<span id="delete-user-status-message">Fetch Error</span>`
}

