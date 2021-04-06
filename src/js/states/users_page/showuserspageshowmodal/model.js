const stateShowUsersPageShowModalModel = async (domElement) => {
    debug(`stateShowUsersPageShowModalModel()`)
    const userId = domElement.parentNode.childNodes[1].innerText
    const rowRole = domElement.getAttribute("role")

    const user = await fetch(`${BASE_API_ADDRESS}/show_user`, { method: 'post', body: `{ "id": ${userId} }` })
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
        "content": user,
        "department": departments,
        "permission": permissions,
        "status": statuses,
        "role": rowRole
    }

    return obj
}

