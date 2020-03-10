const stateShowUsersPageContentView = async (obj) => {
    debug(`stateShowUsersPageContentView()`)
    let page = ''

    const statusMapUkLabel = [
        "",
        "uk-label-success",
        "uk-label-warning",
        "uk-label-danger",
    ]

    obj["users"].forEach(row => {
        page += `
            <tr>
                <td role="id">${row["id"]/1}</td>
                <td role="name" class="editable-cell">
                    <span class="data-content">${row["name"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="email" class="editable-cell">
                    <span class="data-content">${row["email"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="department" class="editable-cell">
                    <span class="data-content">${obj["department"][getArrIdx(obj["department"],row["department"]/1)]["name"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="permission" class="editable-cell">
                    <span class="data-content">${obj["permission"][getArrIdx(obj["permission"],row["permission"]/1)]["name"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="status" class="editable-cell">
                    <span role="active" class="data-content uk-label ${statusMapUkLabel[row["status"]]}">${obj["status"][getArrIdx(obj["status"],row["status"]/1)]["name"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="delete" class="uk-text-center">
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>
            </tr>
        `
    })

    page += `
            <tr id="last-row"></tr>
    `

    return page
}

