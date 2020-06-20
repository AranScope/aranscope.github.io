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
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/cv" component={() => (<Cv data={data}/>)}/>
            <Route exact path="/" component={Index}/>
        </Switch>
    </Router>
)