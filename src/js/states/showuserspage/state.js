const stateShowUsersPage = () => {
    // DESC: ...
    debug(`stateShowUsersPage()`)
    // TODO: Fix Callgraph generation error bellow
    /*
    ```
                Running generate_callgraph...
    Error: ./tmp/callgraph.dot: syntax error in line 36 near '.'
    ```
    */
    // ! Bug trigger
    // if (typeof(stateShowUsersPage.internalState) == 'undefined') {
    //     stateShowUsersPage.internalState = {
    //         database: []
    //     }
    // }
    stateShowUsersPagePresenter()
}

