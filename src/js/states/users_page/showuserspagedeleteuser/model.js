const stateShowUsersPageDeleteUserModel = async (data) => {
    debug(`stateShowUsersPageDeleteUserModel()`)
    const userId = data["content"]["id"]

    const result = await fetch(`${BASE_API_ADDRESS}/users/${userId}`, { "method": "DELETE" })
        .then(() => JSON.parse('{ "deleted": true }'))
        .catch(() => JSON.parse('{ "deleted": false }'))

    return result
}

