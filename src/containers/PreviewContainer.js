import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import Embed from "../components/Embed"
const Container = styled.section`
  background-color: ${p => p.theme.light};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  transition: height .5s ease-in-out;
  height: 0;
  width: 100%;
  ${p =>
    p.open
      ? `
  height:500px;
  border-top: 1px solid ${p.theme.dark};
  border-bottom: 1px solid ${p.theme.dark};
`
      : `
 height: 0;
 `};
`

class PreviewContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isFetching, url, hasUrl } = this.props
    return (
      <Container open={!isFetching && hasUrl}>
        <Embed width={`320px`} height={`480px`} url={url} />
      </Container>
    )
  }
}
const mapStateToProps = state => {
  return {
    hasUrl: state.ui.hasUrl,
    isFetching: state.isFetching,
    url: state.ui.url
  }
}

export default connect(mapStateToProps)(PreviewContainer)
