import React from "react"
import CMS from 'netlify-cms'
import CvPreview from "../previews/cv"

CMS.registerPreviewTemplate("cv", CvPreview)

export default () => (
    <div></div>
)