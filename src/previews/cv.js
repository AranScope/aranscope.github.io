import React from "react"
import Cv from "../pages/cv"
import {StyleSheetManager} from "styled-components";
import "../index.css"

export default ({widgetsFor, entry}) => {
    // const data = {
    //     name: entry.getIn(['data', 'name']),
    //     biography: entry.getIn(['data', 'biography']),
    //     contactInfo: entry.getIn(['data', 'contactInfo'])
    // }

    const data = entry.toJS().data
    console.log(entry)
    console.log(data)

    const iframe = document.querySelector("iframe")
    const iframeHeadElem = iframe.contentDocument.head;

    return (
        <StyleSheetManager target={iframeHeadElem}>
            <div className={"w-screen bg-gray-400"}>
                <Cv data={data}/>
            </div>
        </StyleSheetManager>
    )
}
