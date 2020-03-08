const stateShowLogoutPageView = (obj) => {
    debug(`stateShowLogoutPageView()`)
    return `
    <div class="uk-overflow-auto uk-margin-medium-top uk-text-center@m" tabindex="0">
        <div class="uk-card uk-card-default uk-card-body uk-animation-fade">
            <h1>Logged out</h1>
            <span class="uk-text-danger" uk-icon="icon: unlock; ratio: 2"></span>
            <h2>Thanks for using our system.</h2>
            <h3>We hope you enjoyed the experience we produced.</h3>
            <!--
            <p class="uk-text-large">Now you will be redirected to Login Page.</p>
            -->
        </div>
    </div>
    `
}

