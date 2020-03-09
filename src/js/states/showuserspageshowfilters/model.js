const stateShowUsersPageShowFiltersModel = async () => {
    debug(`stateShowUsersPageShowFiltersModel()`)

    const departments = await fetch('/api/departments.json')
        .then(response => response.json())
        .then(data => data)

    const permissions = await fetch('/api/permissions.json')
        .then(response => response.json())
        .then(data => data)

    const statuses = await fetch('/api/statuses.json')
        .then(response => response.json())
        .then(data => data)

    const obj = {
        "departments": departments,
        "permissions": permissions,
        "statuses": statuses
    }

    return obj
}

