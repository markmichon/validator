import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsList from '../components/ResultsList'

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {htmlResults, cssResults} = this.props;
    return (
      <div>
        <ResultsList results={htmlResults} title="HTML" />
        <ResultsList results={cssResults} title="CSS" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    htmlResults: state.htmlResults,
    cssResults: state.cssResults,
  }
}

export default connect(
  mapStateToProps
)(ResultsContainer);
