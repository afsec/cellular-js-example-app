const stateShowUsersPageShowModalModel = async (event) => {
    debug(`stateShowUsersPageShowModalModel()`)

    const rowId = event.parentNode.childNodes[1].innerText
    const rowRole = event.getAttribute("role")

    const user = await fetch(`${BASE_API_ADDRESS}/users/${rowId}`)
        .then(response => response.json())
        .then(data => data)

    const obj = {
        "content": user,
        "column": rowRole
    }

    return obj
}
