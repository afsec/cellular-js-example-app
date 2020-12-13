const stateShowUsersPageNewUserSaveModel = async (data) => {
    debug(`stateShowUsersPageNewUserSaveModel()`)
    const bodyJson = JSON.stringify(data)

    const result = await fetch(`${BASE_API_ADDRESS}/users`,
        {
            "method": "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": bodyJson
        })
        .then(() => JSON.parse('{ "updated": true }'))
        .catch(() => JSON.parse('{ "updated": false }'))

    return result
}

