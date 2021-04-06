const stateShowUsersPageNewUserModel = async (message) => {
    debug(`stateShowUsersPageNewUserModel()`)
    const departments = await fetch(`${BASE_API_ADDRESS}/show_departments`, { method: 'post', body: '{}' })
        .then(response => response.json())
        .then(data => data)

    const permissions = await fetch(`${BASE_API_ADDRESS}/show_permissions`, { method: 'post', body: '{}' })
        .then(response => response.json())
        .then(data => data)

    const statuses = await fetch(`${BASE_API_ADDRESS}/show_statuses`, { method: 'post', body: '{}' })
        .then(response => response.json())
        .then(data => data)

    const obj = {
        "departments": departments,
        "permissions": permissions,
        "statuses": statuses
    }

    return obj
}

