import React, { Component } from "react"
import styled from "styled-components"

const Frame = styled.section`
  width: ${p => p.width};
  height: ${p => p.height || `100%`};
  transition: width .2s ease-in-out;
  margin: 0 auto;
`

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

const ControlGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`
const ControlButton = styled.button`
  background-color: ${p => p.theme.brand};
  border: none;
  padding: .5rem;
  margin-right: .5rem;
  margin-bottom: .5rem;
`

const Wrapper = styled.div`width: 100%;`

class Embed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: this.props.width || "320px",
      height: this.props.height || "",
      url: this.props.url || ""
    }
  }

  setDimensions(width, height) {
    console.log(this.frameRef)
    this.setState({
      width: width,
      height: height
    })
  }

  componentDidMount() {}

  render() {
    const { width, height } = this.state
    const { url } = this.props
    return (
      <Wrapper>
        <ControlGroup>
          <ControlButton onClick={() => this.setDimensions("320px", "480px")}>
            320
          </ControlButton>
          <ControlButton onClick={() => this.setDimensions("480px", "768px")}>
            480
          </ControlButton>
          <ControlButton onClick={() => this.setDimensions("768px", "1024px")}>
            768
          </ControlButton>
          <ControlButton onClick={() => this.setDimensions("1200px", "900px")}>
            1200
          </ControlButton>
        </ControlGroup>
        <Frame width={width} height={height}>
          {url &&
            <Iframe src={this.props.url} innerRef={x => (this.frameRef = x)} />}
        </Frame>
      </Wrapper>
    )
  }
}
export default Embed
