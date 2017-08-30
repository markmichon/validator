import React from "react"
import styled from "styled-components"

const Frame = styled.section`
  width: ${p => p.width};
  height: ${p => p.height};
`

const Iframe = styled.iframe`width: 100%;`
const Embed = ({ width, height, url }) => {
  return (
    <Frame width={width} height={height}>
      <header className="results-header">
        <h2>
          {width + " by " + height}
        </h2>
      </header>
      <Iframe src={url} />
    </Frame>
  )
}

export default Embed
