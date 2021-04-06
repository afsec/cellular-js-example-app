const stateShowUsersPageNewUserSaveModel = async (data) => {
    debug(`stateShowUsersPageNewUserSaveModel()`)
    const bodyObj = {
        "email": data["email"],
        "name": data["name"],
        "department": data["department"] / 1,
        "permission": data["permission"] / 1,
        "status": data["status"] / 1
    }

    const bodyJson = JSON.stringify(bodyObj)

    const result = await fetch(`${BASE_API_ADDRESS}/add_user`,
        {
            "method": "post",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            "body": bodyJson
        })
        .then(() => JSON.parse('{ "created": true }'))
        .catch(() => JSON.parse('{ "created": false }'))

    return result
}

