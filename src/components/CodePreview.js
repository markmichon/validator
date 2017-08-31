import React from "react"
import styled from "styled-components"
import Prism from "prismjs"
require("../styles/prism-vs.css")

const Pre = styled.pre`
  max-width: calc(50% - 1rem);
  overflow: scroll;
  font-size: .75rem;
  max-height: 50vh;
`

const CodePreview = ({ raw, syntax }) => {
  const language = syntax === "html" ? "markup" : syntax

  const output = Prism.highlight(raw, Prism.languages[language])
  return (
    <Pre>
      <code dangerouslySetInnerHTML={{ __html: output }} />
    </Pre>
  )
}

export default CodePreview
