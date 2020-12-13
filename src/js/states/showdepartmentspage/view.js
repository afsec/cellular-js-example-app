const stateShowDepartmentsPageView = async (modelResult) => {
    debug(`stateShowDepartmentsPageView()`)
    return `
    <div class="uk-overflow-auto uk-margin-medium-top">
        <h1>Departments</h1>
        <button class="uk-button uk-button-default">New</button>
        <hr/>
        <table class="uk-table uk-table-divider uk-table-hover uk-table-small">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        <span class="data-content">IT</span>
                        <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                    </td>
                    <td>
                        <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <span class="data-content">Accounting</span>
                        <a class="uk-icon-link uk-icon" uk-icon="icon: pencil">
                    </td>
                    <td>
                        <a class="uk-icon-link uk-icon" uk-icon="icon: trash">
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>
                        <span class="data-content">Marketing</span>
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
}

