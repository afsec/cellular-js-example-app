const stateShowUsersPageShowModalView = async (modelResult) => {
    debug(`stateShowUsersPageShowModalView()`)
    const modalText = () => {
        debug('modalText()')
        const roleName = modelResult["role"]
        const contentData = modelResult["content"][roleName]

        const modal = `
            <div class="uk-modal-dialog uk-modal-body">
                <h2 class="uk-modal-title">Update</h2>
                <div>
                    <label class="uk-form-label">${roleName}: </label>
                    <input id="update-field" role="${roleName}" class="uk-input" type="text" value="${contentData}">
                </div>
                <p class="uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    <button id="modal-ok-btn" class="uk-button uk-button-primary" type="button">Save</button>
                </p>
                <span id="rendered-modal"></span>
            </div>
        `
        return modal
    }

    const modalSelect = async () => {
        debug('modalSelect()')
        const roleName = modelResult["role"]
        const contentData = modelResult["content"][roleName] / 1

        let modal = `
            <div class="uk-modal-dialog uk-modal-body">
                <h2 class="uk-modal-title">Update</h2>
                <div>
                    <label class="uk-form-label">${roleName}: </label>
                    <div class="uk-form-controls">
                        <select id="update-field" role="${roleName}" class="uk-select uk-form-width-large">
        `
        await modelResult[`${roleName}`].forEach(row => {
            modal += `<option value="${row["id"]}" ${row["id"] === contentData ? 'selected="selected"' : ''}>${row["name"]}</option>`
        })

        modal += `
                        </select>
                    </div>
                </div>
                <p class="uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    <button id="modal-ok-btn" class="uk-button uk-button-primary" type="button">Save</button>
                </p>
                <span id="rendered-modal"></span>
            </div>
        `
        return modal
    }

    const modalDeleteConfirmation = () => {
        debug('modalDeleteConfirmation()')
        const userName = modelResult["content"]["name"]
        const userId = modelResult["content"]["id"]

        const modal = `
            <div class="uk-modal-dialog">
                    <div class="uk-modal-body">
                        Confirm user: <strong>${userName}</strong> deletion?
                        <input id="user-id" type="hidden" value="${userId}">
                    </div>
                        <div class="uk-modal-footer uk-text-right">
                        <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                        <button id="modal-ok-btn" class="uk-button uk-button-primary" autofocus="">Ok</button>
                    </div>
                    <span id="rendered-modal"></span>
            </div>
        `
        return modal
    }

    const renderModal = (roleName) => {
        const roleToFunc = {
            "name": modalText,
            "email": modalText,
            "department": modalSelect,
            "permission": modalSelect,
            "status": modalSelect,
            "delete": modalDeleteConfirmation
        }
        const renderedModal = roleToFunc[`${roleName}`]()
        return renderedModal
    }

    return renderModal(modelResult["role"])

}

