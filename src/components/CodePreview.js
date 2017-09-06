import React from "react"
import styled from "styled-components"

require("../styles/prism-vs.css")

const Pre = styled.pre`
  max-width: calc(50% - 1rem);
  overflow: scroll;
  font-size: .75rem;
  max-height: 50vh;
`

const CodePreview = ({ raw }) => {
  return (
    <Pre>
      <code dangerouslySetInnerHTML={{ __html: raw }} />
    </Pre>
  )
}

export default CodePreview
