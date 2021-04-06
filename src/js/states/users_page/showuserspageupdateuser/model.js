const stateShowUsersPageUpdateUserModel = async (data) => {
    debug(`stateShowUsersPageUpdateUserModel()`)
    const fieldName = data["role"]
    const value = data["updateValue"]
    const numericFields = [
        "department",
        "permission",
        "status",
    ]
    const userId = data["content"]["id"]

    let bodyObj = JSON.parse(`{ "id": ${userId}, "${fieldName}": null }`)
    
    bodyObj[`${fieldName}`] = numericFields.findIndex(item => item === fieldName) > -1 ? value/1 : value

    const bodyJson = JSON.stringify(bodyObj)
    
    const result = await fetch(`${BASE_API_ADDRESS}/update_user`,
        {
            "method": "post",
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

