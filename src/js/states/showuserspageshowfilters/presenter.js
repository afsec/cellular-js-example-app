const stateShowUsersPageShowFiltersPresenter = async () => {
    debug(`stateShowUsersPageShowFiltersPresenter()`)
    const model = await stateShowUsersPageShowFiltersModel()
    const view = await stateShowUsersPageShowFiltersView(model)
    // AddEvenListener, innerHTML or Call Another State.
    var selectedFilters = {
        "department": null,
        "permission": null,
        "status": null
    }

    const applyFilters = async (obj) => {
        debug('applyFilters()')
        debug('obj')
        let filteredData = null

        // * Must do `JSON.parse(JSON.stringify(obj))` to clone the object insted of passing references
        filteredData = await JSON.parse(JSON.stringify(obj));


        if (selectedFilters["department"] != null) {
            const department = await filteredData["department"].find(line => line["name"] == selectedFilters["department"])
            filteredData["users"] = await filteredData["users"].filter(line => line["department"] == department["id"])
        }

        if (selectedFilters["permission"] != null) {
            const permission = await filteredData["permission"].find(line => line["name"] == selectedFilters["permission"])
            filteredData["users"] = await filteredData["users"].filter(line => line["permission"] == permission["id"])
        }

        if (selectedFilters["status"] != null) {
            const status = await filteredData["status"].find(line => line["name"] == selectedFilters["status"])
            filteredData["users"] = await filteredData["users"].filter(line => line["status"] == status["id"])
        }
        stateShowUsersPageContent(filteredData)
    }

    // Show Filters
    const showFiltersEntrypoint = 'div#show-filters'
    waitForElement({ "selector": showFiltersEntrypoint }, () => {
        document.querySelector(showFiltersEntrypoint).innerHTML = view
        applyFilters(model)
    })

    // Department
    const departmentSelectEntrypoint = 'select#filter-by-department'
    waitForElement({ "selector": departmentSelectEntrypoint }, () => {
        const select = document.querySelector(departmentSelectEntrypoint)
        select.addEventListener('change', () => {
            const selectedValue = select.options[select.selectedIndex].value
            selectedValue == 'Department' ? selectedFilters["department"] = null : selectedFilters["department"] = selectedValue
            applyFilters(model)
        })
    })

    // Permission
    const permissionSelectEntrypoint = 'select#filter-by-permission'
    waitForElement({ "selector": permissionSelectEntrypoint }, () => {
        let select = document.querySelector(permissionSelectEntrypoint)
        select.addEventListener('change', () => {
            const selectedValue = select.options[select.selectedIndex].value
            selectedValue == 'Permission' ? selectedFilters["permission"] = null : selectedFilters["permission"] = selectedValue
            applyFilters(model)
        })
    })

    // Status
    const statusSelectEntrypoint = 'select#filter-by-status'
    waitForElement({ "selector": statusSelectEntrypoint }, () => {
        const select = document.querySelector(statusSelectEntrypoint)
        select.addEventListener('change', () => {
            const selectedValue = select.options[select.selectedIndex].value
            selectedValue == 'Status' ? selectedFilters["status"] = null : selectedFilters["status"] = selectedValue
            applyFilters(model)
        })
    })

}

