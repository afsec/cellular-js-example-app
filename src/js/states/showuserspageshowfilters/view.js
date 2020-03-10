const stateShowUsersPageShowFiltersView = async (obj) => {
    debug(`stateShowUsersPageShowFiltersView()`)

    let page = `
    <div class="uk-first-column">
        <div class="uk-panel">
            <select id="filter-by-department" class="uk-select">
                <option>Department</option>
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
                <option>Permission</option>
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
                <option>Status</option>
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

