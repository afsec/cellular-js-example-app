const stateShowUsersPageShowFiltersView = async (modelResult) => {
    debug(`stateShowUsersPageShowFiltersView()`)
    let page = `
    <div class="uk-first-column">
        <div class="uk-panel">
            <select id="filter-by-department" class="uk-select">
                <option>Department (All)</option>
    `
    await modelResult["department"].forEach(row => {
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
    await modelResult["permission"].forEach(row => {
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

    await modelResult["status"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
            </select>
        </div>
    </div>
    `
    return page
}

