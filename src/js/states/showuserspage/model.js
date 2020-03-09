const stateShowUsersPageModel = async () => {
    debug(`stateShowUsersPageModel()`)
    const users = await fetch('/api/users.json')
        .then(response => response.json())
        .then(data => data)

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
        "users": users,
        "departments": departments,
        "permissions": permissions,
        "statuses": statuses
    }
    return obj
}