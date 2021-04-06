const stateShowUsersPageShowFiltersModel = async (message) => {
    debug(`stateShowUsersPageShowFiltersModel()`)
    const users = await fetch(`${BASE_API_ADDRESS}/show_users`, { method: 'post', body: '{}' })
        .then(response => response.json())
        .then(data => data)

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
        "users": users,
        "department": departments,
        "permission": permissions,
        "status": statuses
    }

    return obj
}

