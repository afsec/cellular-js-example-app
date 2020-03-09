const stateShowMessagesPageView = (obj) => {
    debug(`stateShowMessagesPageView()`)
    const page = `
    <div class="uk-overflow-auto uk-margin-medium-top">
        <h1>Messages</h1>
        <button class="uk-button uk-button-default">New</button>
        <hr/>
        <div class="uk-grid-divider uk-child-width-expand@s" uk-grid>
            <div class="uk-first-column">
                <div class="uk-panel">
                    <select class="uk-select">
                        <option>From</option>
                        <option>Option 01</option>
                        <option>Option 02</option>
                    </select>
                </div>
            </div>
            <div>
            <div class="uk-panel">
                <select class="uk-select">
                    <option>Department(From)</option>
                    <option>Option 01</option>
                    <option>Option 02</option>
                </select>
            </div>
            </div>
            <div>
                <div class="uk-panel">
                    <select class="uk-select">
                        <option>To</option>
                        <option>Option 01</option>
                        <option>Option 02</option>
                    </select>
                </div>
            </div>

            <div>
                <div class="uk-panel">
                    <select class="uk-select">
                        <option>Department(To)</option>
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
                <th>Sent</th>
                <th>From</th>
                <th>Department(From)</th>
                <th>To</th>
                <th>Department(To)</th>
                <th>Subject</th>
                <th>Body</th>
                <th>Flag</th>
                <th>Read</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td role="id">1</td>
                <td role="Sent">
                    <span class="data-content">Mon, 09 Mar 2020 15:41:14 GMT</span>
                </td>
                <td role="from">
                    <span class="data-content">root@example.net</span>
                </td>
                <td role="from-department">
                    <span class="data-content">IT</span>
                </td>
                <td role="to">
                    <span class="data-content">root@example.net</span>
                </td>
                <td role="to-department">
                    <span class="data-content">IT</span>
                </td>
                <td role="subject">
                    <span class="data-content">Just a test message...</span>
                </td>
                <td role="body">
                    <span class="data-content">Body of a message. Lorem Ipsum ...</span>
                </td>
                <td role="flag"></td>
                <td role="read">
                    <span class="data-content">Mon, 09 Mar 2020 15:43:49 GMT</span>
                </td>
            </tr>
            <tr>
                <td role="id">2</td>
                <td role="Sent">
                    <span class="data-content">Mon, 09 Mar 2020 15:44:14 GMT</span>
                </td>
                <td role="from">
                    <span class="data-content">root@example.net</span>
                </td>
                <td role="from-department">
                    <span class="data-content">IT</span>
                </td>
                <td role="to">
                    <span class="data-content">root@example.net</span>
                </td>
                <td role="to-department">
                    <span class="data-content">IT</span>
                </td>
                <td role="subject">
                    <span class="data-content">Just a test message...</span>
                </td>
                <td role="body">
                    <span class="data-content">Body of a message. Lorem Ipsum ...</span>
                </td>
                <td role="flag">
                    <span role="active" class="data-content uk-label uk-label-danger">Urgent</span>
                </td>
                <td role="read">
                    <span class="data-content">Mon, 09 Mar 2020 15:47:49 GMT</span>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
    `
    return page
}

