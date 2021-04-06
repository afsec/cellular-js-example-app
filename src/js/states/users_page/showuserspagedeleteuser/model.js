const stateShowUsersPageDeleteUserModel = async (data) => {
    debug(`stateShowUsersPageDeleteUserModel()`)
    const userId = data["content"]["id"]

    let bodyObj = JSON.parse(`{ "id": ${userId} }`)

    const bodyJson = JSON.stringify(bodyObj)

    const result = await fetch(`${BASE_API_ADDRESS}/delete_user`,
        {
            "method": "post",
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

