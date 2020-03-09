const stateShowUsersPageShowFiltersModel = async () => {
    debug(`stateShowUsersPageShowFiltersModel()`)

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
        "departments": departments,
        "permissions": permissions,
        "statuses": statuses
    }

    return obj
}

