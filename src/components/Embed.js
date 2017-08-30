import React, { Component } from "react"
import styled from "styled-components"

const Frame = styled.section`
  width: ${p => p.width};
  height: ${p => p.height};
  transition: width .2s ease-in-out;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

const ControlGroup = styled.div`
  display: flex;
  width: 100%;
`
const ControlButton = styled.button`
  background-color: ${p => p.theme.brand};
  border: none;
  padding: .5rem;
  margin-right: .5rem;
  margin-bottom: .5rem;
`
class Embed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: this.props.url,
      width: this.props.width || `320px`,
      height: this.props.height || ``
    }
  }

  setWidth(width) {
    this.setState({
      width: width
    })
  }

  render() {
    const { url, width } = this.state
    return (
      <Frame width={width}>
        <ControlGroup>
          <ControlButton onClick={() => this.setWidth("320px")}>
            320
          </ControlButton>
          <ControlButton onClick={() => this.setWidth("480px")}>
            480
          </ControlButton>
          <ControlButton onClick={() => this.setWidth("768px")}>
            768
          </ControlButton>
          <ControlButton onClick={() => this.setWidth("1200px")}>
            1200
          </ControlButton>
        </ControlGroup>
        <Iframe src={url} />
      </Frame>
    )
  }
}
export default Embed
