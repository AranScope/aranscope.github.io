import React from "react"
import Cv from "../pages/cv"

export default ({widgetsFor, entry}) => {
    const data = {
        name: entry.getIn(['data', 'name']),
        biography: entry.getIn(['data', 'biography']),
    }

    return (
        <Cv data={data}/>
    )
}
