import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Index from "./pages/index"
import Cv from "./pages/cv"

export default () => (
    <Router>
        <Switch>
            <Route path="/cv">
                <Cv/>
            </Route>
            <Route path="/">
                <Index/>
            </Route>

        </Switch>
    </Router>
)