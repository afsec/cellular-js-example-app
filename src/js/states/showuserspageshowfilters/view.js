const stateShowUsersPageShowFiltersView = async (obj) => {
    debug(`stateShowUsersPageShowFiltersView()`)

    let page = `
    <div class="uk-first-column">
        <div class="uk-panel">
            <select id="filter-by-department" class="uk-select">
                <option>Department (All)</option>
    `
    // TODO: To create a state called `ShowUsersPageShowFilters`
    await obj["department"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
            </select>
        </div>
    </div>
    <div>
        <div class="uk-panel">
            <select id="filter-by-permission" class="uk-select">
                <option>Permission (All)</option>
    `
    await obj["permission"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
            </select>
        </div>
    </div>
    <div>
        <div class="uk-panel">
            <select id="filter-by-status" class="uk-select">
                <option>Status (All)</option>
    `

    await obj["status"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
            </select>
        </div>
    </div>
    `
    return page
}

