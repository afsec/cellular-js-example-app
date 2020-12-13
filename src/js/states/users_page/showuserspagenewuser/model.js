const stateShowUsersPageNewUserModel = async (message) => {
    debug(`stateShowUsersPageNewUserModel()`)
    const departments = await fetch(`${BASE_API_ADDRESS}/departments`)
        .then(response => response.json())
        .then(data => data)

    const permissions = await fetch(`${BASE_API_ADDRESS}/permissions`)
        .then(response => response.json())
        .then(data => data)

    const statuses = await fetch(`${BASE_API_ADDRESS}/statuses`)
        .then(response => response.json())
        .then(data => data)

    const obj = {
        "departments": departments,
        "permissions": permissions,
        "statuses": statuses
    }

    return obj
}

