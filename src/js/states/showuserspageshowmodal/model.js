const stateShowUsersPageShowModalModel = async (domElement) => {
    debug(`stateShowUsersPageShowModalModel()`)

    const rowId = domElement.parentNode.childNodes[1].innerText
    const rowRole = domElement.getAttribute("role")

    const user = await fetch(`${BASE_API_ADDRESS}/users/${rowId}`)
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
        "content": user,
        "department": departments,
        "permission": permissions,
        "status": statuses,
        "role": rowRole
    }

    return obj
}
