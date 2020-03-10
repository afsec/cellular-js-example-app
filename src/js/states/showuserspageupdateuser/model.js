const stateShowUsersPageUpdateUserModel = async (data) => {
    debug(`stateShowUsersPageUpdateUserModel()`)
    debug('data')
    debug(data)
    debug('-data-')
    const fieldName = data["role"]
    const value = data["updateValue"]
    const bodyJson = `{"${fieldName}": "${value}"}`
    const userId = data["content"]["id"]

    const result = await fetch(`${BASE_API_ADDRESS}/users/${userId}`,
        {
            "method": "PATCH",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": bodyJson
        })
        .then(() => JSON.parse('{ "deleted": true }'))
        .catch(() => JSON.parse('{ "deleted": false }'))

    return result
}

