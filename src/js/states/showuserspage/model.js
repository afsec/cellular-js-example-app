const stateShowUsersPageModel = async () => {
    debug(`stateShowUsersPageModel()`)

    const users = await fetch(`${BASE_API_ADDRESS}/users.json`)
        .then(response => response.json())
        .then(data => data)

    const departments = await fetch(`${BASE_API_ADDRESS}/departments.json`)
        .then(response => response.json())
        .then(data => data)

    const permissions = await fetch(`${BASE_API_ADDRESS}/permissions.json`)
        .then(response => response.json())
        .then(data => data)

    const statuses = await fetch(`${BASE_API_ADDRESS}/statuses.json`)
        .then(response => response.json())
        .then(data => data)

    const obj = {
        "users": users,
        "departments": departments,
        "permissions": permissions,
        "statuses": statuses
    }

    return obj
}