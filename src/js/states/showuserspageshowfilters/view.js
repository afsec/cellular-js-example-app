const stateShowUsersPageShowFiltersView = async (obj) => {
    debug(`stateShowUsersPageShowFiltersView()`)

    let page = `
    <div class="uk-first-column">
        <div class="uk-panel">
            <select class="uk-select">
                <option>Department</option>
    `
    // TODO: To create a state called `ShowUsersPageShowFilters`
    await obj["departments"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
            </select>
        </div>
    </div>
    <div>
        <div class="uk-panel">
            <select class="uk-select">
                <option>Permission</option>
    `
    await obj["permissions"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
            </select>
        </div>
    </div>
    <div>
        <div class="uk-panel">
            <select class="uk-select">
                <option>Status</option>
    `

    await obj["statuses"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
            </select>
        </div>
    </div>
    `
    return page
}

