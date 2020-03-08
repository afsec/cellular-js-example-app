const stateShowLogoutPageView = (obj) => {
    debug(`stateShowLogoutPageView()`)
    return `
    <div class="uk-overflow-auto uk-margin-medium-top uk-text-center@m" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade">
            <h1>Logout</h1>
            <span class="uk-text-danger" uk-icon="icon: unlock; ratio: 2"></span>
            <h2>Thank you for using or system.</h2>
            <h3>We hope you enjoy the experience we made.</h3>
            <p class="uk-text-large">Now you will be redirected to Login Page.</p>
        </div>
    </div>
    `
}

