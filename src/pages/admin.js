import React from "react"
import CMS from 'netlify-cms-app'

import CvPreview from "../previews/cv"

CMS.registerPreviewTemplate("cv", CvPreview)
CMS.registerPreviewStyle("../index.css")
CMS.registerPreviewStyle("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Roboto:ital,wght@0,700;1,400&display=swap")

export default () => {

    CMS.init();

    return (
        <div></div>
    );
}