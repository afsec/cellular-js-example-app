const stateShowPanelPageView = (obj) => {
    debug(`stateShowPanelPageView()`)
    const page = `
    <nav class="uk-navbar-container">
        <div class="uk-container">
            <div uk-navbar="" class="uk-navbar">
                <div class="uk-navbar-left">
                    <a class="uk-navbar-item uk-logo" href="#">Admin Panel</a>
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a id="menu-item-users">Users</a></li>
                        <li><a id="menu-item-departments">Departments</a></li>
                        <li><a id="menu-item-permissions">permissions</a></li>
                    </ul>
                </div>
                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">
                        <li>
                            <a href="#" data-uk-icon="icon:user" aria-expanded="false" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="user"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg></a>
                            <div class="uk-navbar-dropdown uk-navbar-dropdown-bottom-right" style="left: 674px; top: 80px;">
                                <ul class="uk-nav uk-navbar-dropdown-nav">
                                    <li class="uk-nav-header uk-text-small uk-text-primary">YOUR ACCOUNT</li>
                                    <li><a href="#"><span data-uk-icon="icon: thumbnails" class="uk-icon"></span> Dashboards</a></li>
                                    <li><a href="#"><span data-uk-icon="icon: credit-card" class="uk-icon"></span> Payments</a></li>
                                    <li><a href="#"><span data-uk-icon="icon: cog" class="uk-icon"></span> Configuration</a></li>
                                    <li class="uk-nav-divider"></li>
                                    <li><a href="#"><span data-uk-icon="icon: database" class="uk-icon"></span> Your Data</a></li>
                                    <li class="uk-nav-divider"></li>
                                    <li><a href="#"><span data-uk-icon="icon: sign-out" class="uk-icon"></span> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="uk-hidden@m"><a class="uk-navbar-toggle uk-icon uk-navbar-toggle-icon" data-uk-toggle="" data-uk-navbar-toggle-icon="" href="#offcanvas-nav"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="navbar-toggle-icon"><rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2"></rect><rect y="15" width="20" height="2"></rect></svg></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <div class="uk-section uk-section-default">
        <div id="page-content" class="uk-container"></div>
    </div>
    `

    return page
}

