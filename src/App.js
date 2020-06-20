import React from "react"
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom"

import Index from "./pages/index"
import Cv from "./pages/cv"
import Admin from "./pages/admin"
import data from "./data/cv.json"

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/cv" component={() => (<Cv data={data}/>)}/>
            <Route path="/admin" component={Admin}/>
        </Switch>
    </BrowserRouter>
)