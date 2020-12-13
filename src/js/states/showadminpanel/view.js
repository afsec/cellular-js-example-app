const stateShowAdminPanelView = async (modelResult) => {
    debug(`stateShowAdminPanelView()`)
    return `
    <div class="uk-container">
        <div uk-navbar="" class="uk-navbar">
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo" href="#">Admin Panel</a>
                <ul class="uk-navbar-nav">
                <!-- <li class="uk-active"><a id="menu-item-users">Users</a></li> -->
                    <li><a id="menu-item-users">Users</a></li>
                    <li><a id="menu-item-departments">Departments</a></li>
                    <li><a id="menu-item-permissions">permissions</a></li>
                    <li><a>|</a></li>
                    <li><a id="menu-item-messages">Messages</a></li>
                </ul>
            </div>
            <div id="user-menu" class="uk-navbar-right"></div>
        </div>
    </div>
    `
}

