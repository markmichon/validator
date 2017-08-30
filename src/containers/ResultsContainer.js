import React, { Component } from "react"
import { connect } from "react-redux"
import ResultsList from "../components/ResultsList"
import styled from "styled-components"
import StatContainer from "../components/StatContainer"
import StatCard from "../components/StatCard"
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      dataType: false
    }
    this.resultSwitcher = this.resultSwitcher.bind(this)
  }

  resultSwitcher(type) {
    this.setState((prevState, props) => {
      const newState =
        String(type).toLowerCase() === prevState.dataType
          ? {
              dataType: false,
              data: {}
            }
          : {
              dataType: String(type).toLowerCase(),
              data: props.results[String(type).toLowerCase()]
            }

      return newState
    })
  }
  render() {
    const { results, hasUrl, isFetching } = this.props
    if (hasUrl && results && !isFetching) {
      return (
        <div>
          <StatContainer>
            <StatCard
              title="HTML"
              items={results.html.counts}
              onClick={this.resultSwitcher}
              active={this.state.dataType === "html" ? true : false}
            />
            <StatCard
              title="CSS"
              items={results.css.counts}
              onClick={this.resultSwitcher}
              active={this.state.dataType === "css" ? true : false}
            />
          </StatContainer>
          <FlexContainer>
            <ResultsList
              results={this.state.data}
              open={this.state.dataType ? true : false}
            />
            {/* <ResultsList results={cssResults} title="CSS" /> */}
          </FlexContainer>
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

export default connect(mapStateToProps)(ResultsContainer)
