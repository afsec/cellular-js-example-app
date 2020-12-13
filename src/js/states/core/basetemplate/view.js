const stateBaseTemplateView = async (modelResult) => {
    debug(`stateBaseTemplateView()`)
    return `
    <nav id="panel-admin" class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar="" class="uk-navbar">
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="/">Admin Panel</a>
                    <ul class="uk-navbar-nav">
                    <!-- <li class="uk-active"><a id="menu-item-users">Users</a></li> -->
                        <li><a id="menu-item-users" href="/#/users">Users</a></li>
                        <li><a id="menu-item-departments" href="/#/departments">Departments</a></li>
                        <li><a id="menu-item-permissions" href="/#/permissions">permissions</a></li>
                        <li><a id="menu-item-users" href="/#/shouldnotexist">Test 404</a></li>
                        <li><a>|</a></li>
                        <li><a id="menu-item-messages" href="/#/messages">Messages</a></li>
                    </ul>
                </div>
                <div id="user-menu" class="uk-navbar-right"></div>
            </div>
        </div>
    </nav>
    <div class="uk-section uk-section-default">
        <div id="page-content" class="uk-container"></div>
    </div>
    `
}

