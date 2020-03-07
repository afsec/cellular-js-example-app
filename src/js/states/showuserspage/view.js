const stateShowUsersPageView = (obj) => {
    debug(`stateShowUsersPageView()`)
    const page = `
    <div class="uk-overflow-auto uk-margin-medium-top">
        <h1>Users</h1>
        <button class="uk-button uk-button-default">New</button>
        <table class="uk-table uk-table-divider uk-table-hover uk-table-small">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Group</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>
                    <span class="data-content">Charlie Root</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td>
                    <span class="data-content">root@example.com</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td>
                    <span class="data-content">Admin</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>John Doe</td>
                <td>john@example.net</td>
                <td>Support</td>
                <td>
                <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
            </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Alice Stark</td>
                <td>alice@example.net</td>
                <td>Marketing</td>
                <td>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>

            </tr>
            <tr>
                <td>4</td>
                <td>Tony Coast</td>
                <td>tony@example.com</td>
                <td>Support</td>
                <td>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Jack Parker</td>
                <td>jack@example.net</td>
                <td>Marketing</td>
                <td>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    `
    return page
}

