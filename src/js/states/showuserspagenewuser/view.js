const stateShowUsersPageNewUserView = async (obj) => {
    debug(`stateShowUsersPageNewUserView()`)
    let page = `
    <div class="uk-modal-dialog">

                <button class="uk-modal-close-default uk-icon uk-close" type="button" uk-close=""><svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg></button>

                <div class="uk-modal-header">
                    <h2 class="uk-modal-title">New User</h2>
                </div>

                <div class="uk-modal-body uk-overflow-auto" uk-overflow-auto="" style="min-height: 150px; max-height: 707px;">
                    <form class="uk-form-horizontal">
                        <div class="uk-margin">
                            <label class="uk-form-label" for="form-h-text">Name</label>
                            <div class="uk-form-controls">
                                <input class="uk-input uk-form-width-large" type="text" placeholder="First Last">
                            </div>
                        </div>

                        <div class="uk-margin">
                            <label class="uk-form-label" for="form-h-text">E-mail</label>
                            <div class="uk-form-controls">
                                <input class="uk-input uk-form-width-large" type="text" placeholder="email@example.net">
                            </div>
                        </div>

                        <div class="uk-margin">
                            <label class="uk-form-label" for="form-h-select">Department</label>
                            <div class="uk-form-controls">
                                <select class="uk-select uk-form-width-large">
                                <option></option>
    `
    await obj["departments"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
                                </select>
                            </div>
                        </div>

                        <div class="uk-margin">
                            <label class="uk-form-label" for="form-h-select">Permission</label>
                            <div class="uk-form-controls">
                                <select class="uk-select uk-form-width-large">
                                    <option></option>
    `
    await obj["permissions"].forEach(row => {
        page += `<option>${row["name"]}</option>`
    })

    page += `
                                </select>
                            </div>
                        </div>

                    </form>
                </div>

                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
                    <button class="uk-button uk-button-primary" type="button">Save</button>
                </div>
                <span id="rendered-modal"></span>
            </div>
    `
    return page
}

