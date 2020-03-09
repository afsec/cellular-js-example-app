const stateShowUsersPageView = (obj) => {
    debug(`stateShowUsersPageView()`)
    debug(obj)
    debug('---')
    const page = `
    <div class="uk-overflow-auto uk-margin-medium-top">
        <h1>Users</h1>
        <button class="uk-button uk-button-default">New</button>
        <hr/>
        <div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
            <div class="uk-first-column">
                <div class="uk-panel">
                    <select class="uk-select">
                        <option>Department</option>
                        <option>Option 01</option>
                        <option>Option 02</option>
                    </select>
                </div>
            </div>
            <div>
                <div class="uk-panel">
                    <select class="uk-select">
                        <option>Permission</option>
                        <option>Option 01</option>
                        <option>Option 02</option>
                    </select>
                </div>
            </div>
            <div>
                <div class="uk-panel">
                    <select class="uk-select">
                        <option>Status</option>
                        <option>Option 01</option>
                        <option>Option 02</option>
                    </select>
                </div>
            </div>
        </div>
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
            <tr>
                <td>1</td>
                <td role="name">
                    <span class="data-content">Charlie Root</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="email">
                    <span class="data-content">root@example.net</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="department">
                    <span class="data-content">IT</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="permission">
                    <span class="data-content">Administrator</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="status">
                    <span role="active" class="data-content uk-label uk-label-success">Active</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td role="delete">
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>John Doe</td>
                <td>john@example.net</td>
                <td>IT</td>
                <td>Manager</td>
                <td role="status">
                    <span role="active" class="data-content uk-label uk-label-success">Active</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Alice Stark</td>
                <td>alice@example.net</td>
                <td>Marketing</td>
                <td>Manager</td>
                <td role="status">
                    <span role="active" class="data-content uk-label uk-label-success">Active</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>

            </tr>
            <tr>
                <td>4</td>
                <td>Tony Coast</td>
                <td>tony@example.net</td>
                <td>Accounting</td>
                <td>Manager</td>
                <td role="status">
                    <span role="active" class="data-content uk-label uk-label-success">Active</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
                <td>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Jack Parker</td>
                <td>jack@example.net</td>
                <td>Accounting</td>
                <td>User</td>
                <td role="status">
                    <span role="disabled" class="data-content uk-label uk-label-warning">Disabled</span>
                    <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                </td>
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

