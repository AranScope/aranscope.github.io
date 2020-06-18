import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Index from "./pages/index"
import Cv from "./pages/cv"
import Admin from "./pages/admin"
import data from "./data/cv.json"

export default () => (
    <Router>
        <Switch>
            <Route path="/cv">
                <Cv data={data}/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
            <Route path="/">
                <Index/>
            </Route>

        </Switch>
    </Router>
)