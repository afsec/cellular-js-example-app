const stateShowUsersPageShowFiltersModel = async (message) => {
    debug(`stateShowUsersPageShowFiltersModel()`)
    const users = await fetch(`${BASE_API_ADDRESS}/users`)
        .then(response => response.json())
        .then(data => data)

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
        "users": users,
        "department": departments,
        "permission": permissions,
        "status": statuses
    }

    return obj
}

