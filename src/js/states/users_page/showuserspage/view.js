const stateShowUsersPageView = async (modelResult) => {
    debug(`stateShowUsersPageView()`)
    return `
    <div class="uk-overflow-auto uk-margin-medium-top">
        <h1>Users</h1>
        <button id="new-user" class="uk-button uk-button-default">New</button>
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
        <tbody id="show-users"></tbody>
        </table>
        </div>
        <!-- Modal -->
        <div id="users-modal" uk-modal></div>
    `
}

