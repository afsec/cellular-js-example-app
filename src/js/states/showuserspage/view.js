const stateShowUsersPageView = async (obj) => {
    debug(`stateShowUsersPageView()`)
    let page = `
    <div class="uk-overflow-auto uk-margin-medium-top">
        <h1>Users</h1>
        <button class="uk-button uk-button-default">New</button>
        <hr/>
        <div id="show-filters" class="uk-grid-divider uk-child-width-expand@s" uk-grid></div>
        <table class="uk-table uk-table-divider uk-table-hover uk-table-small">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Department</th>
                <th>Permission</th>
                <th>Status</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
    `
    const statusMapUkLabel = [
        "",
        "uk-label-success",
        "uk-label-warning",
        "uk-label-danger",
    ]

    obj["users"].forEach(row => {
        page += `
            <tr>
                <td role="id">${row["id"]}</td>
                <td role="name">
                    <span class="data-content">${row["name"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="email">
                    <span class="data-content">${row["email"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="department">
                    <span class="data-content">${obj["departments"][getArrIdx(obj["departments"],row["department"])]["name"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="permission">
                    <span class="data-content">${obj["permissions"][getArrIdx(obj["permissions"],row["permission"])]["name"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="status">
                    <span role="active" class="data-content uk-label ${statusMapUkLabel[row["status"]]}">${obj["statuses"][getArrIdx(obj["statuses"],row["status"])]["name"]}</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="delete">
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>
            </tr>
        `
    })

    page += `
            </tbody>
    </table>
    </div>
    `
    return page
}

