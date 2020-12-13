const stateShowProfileMenuView = async (modelResult) => {
    debug(`stateShowProfileMenuView()`)
    return `
    <ul class="uk-navbar-nav">
        <li>
            <a href="#" data-uk-icon="icon:user" aria-expanded="false" class="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="user"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path></svg></a>
            <div class="uk-navbar-dropdown uk-navbar-dropdown-bottom-right" style="left: 674px; top: 80px;">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                    <li class="uk-nav-header uk-text-small uk-text-primary">YOUR ACCOUNT</li>
                    <li><a id="dashboards" href="/#/dashboards"><span data-uk-icon="icon: thumbnails" class="uk-icon"></span> Dashboards</a></li>
                    <li><a id="payments" href="/#/payments"><span data-uk-icon="icon: credit-card" class="uk-icon"></span> Payments</a></li>
                    <li><a id="configuration" href="/#/configuration"><span data-uk-icon="icon: cog" class="uk-icon"></span> Configuration</a></li>
                    <li class="uk-nav-divider"></li>
                    <li><a id="your-data" href="/#/your-data"><span data-uk-icon="icon: database" class="uk-icon"></span> Your Data</a></li>
                    <li class="uk-nav-divider"></li>
                    <li><a id="logout" href="/#/logout"><span data-uk-icon="icon: sign-out" class="uk-icon"></span> Logout</a></li>
                </ul>
            </div>
        </li>
    </ul>
    `
}
/*
    : stateShowDashboardsPage,
    "/payments": stateShowPaymentsPage,
    "/configuration": stateShowConfigurationPage,
    "/your-data": stateShowYourDataPage,
    "/logout": stateShowLogoutPage
*/
