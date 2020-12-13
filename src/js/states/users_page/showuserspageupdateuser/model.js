const stateShowUsersPageUpdateUserModel = async (data) => {
    debug(`stateShowUsersPageUpdateUserModel()`)
    const fieldName = data["role"]
    const value = data["updateValue"]
    const numericFields = [
        "department",
        "permission",
        "status",
    ]
    let bodyObj = JSON.parse(`{"${fieldName}": null }`)
    bodyObj[`${fieldName}`] = numericFields.findIndex(item => item === fieldName) > -1 ? value/1 : value

    const bodyJson = JSON.stringify(bodyObj)
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

