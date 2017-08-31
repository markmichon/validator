import React, { Component } from "react"
import { connect } from "react-redux"
import ResultsList from "../components/ResultsList"
import PreviewContainer from "./PreviewContainer"
import styled from "styled-components"
import StatContainer from "../components/StatContainer"
import StatCard from "../components/StatCard"
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1rem;
`

const Count = styled.span`
  color: ${p =>
    p.type == "error"
      ? p.theme.error
      : p.type == "warning" ? p.theme.warning : `black`};
  padding-left: .5rem;
`

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;

  ${p =>
    p.active
      ? `
  border-bottom: 2px solid #ccc; 
  outline: none;
  `
      : null};
`

class Switcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePanel: false
    }
    this.setPanel = this.setPanel.bind(this)
  }

  renderSwitch(type, props) {
    console.log("inside renderSwitch")
    switch (type) {
      case "html":
        console.log("inside html")
        return <ResultsList type={`html`} results={props.results.html} />
      case "css":
        return <ResultsList type={`css`} results={props.results.css} />
      case "responsive":
        return <PreviewContainer />
    }
  }

  renderCounts(counts) {
    return counts.map((count, i) =>
      <Count key={i} type={count.type}>
        {count.count}
      </Count>
    )
  }

  setPanel(type) {
    this.setState({ activePanel: type })
  }

  render() {
    const { results, hasUrl, isFetching } = this.props
    if (hasUrl && results && !isFetching) {
      return (
        <div>
          <FlexContainer>
            <Button
              onClick={() => this.setPanel("html")}
              active={this.state.activePanel === "html"}
            >
              HTML {this.renderCounts(results.html.counts)}
            </Button>
            <Button
              onClick={x => this.setPanel("css")}
              active={this.state.activePanel === "css"}
            >
              CSS {this.renderCounts(results.css.counts)}
            </Button>
            <Button
              onClick={x => this.setPanel("responsive")}
              active={this.state.activePanel === "responsive"}
            >
              Responsive
            </Button>
          </FlexContainer>
          {this.renderSwitch(this.state.activePanel, this.props)}
        </div>
      )
    } else {
      return (
        <FlexContainer>
          <p>To get started, enter a url</p>
        </FlexContainer>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    results: state.results,
    hasUrl: state.ui.hasUrl,
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps)(Switcher)
