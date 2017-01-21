import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultsList from '../components/ResultsList'

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {htmlResults, cssResults, hasUrl, isFetching} = this.props;
    if (hasUrl) {
      return (
        <div className="flex-container">
          <ResultsList results={htmlResults} title="HTML" />
          <ResultsList results={cssResults} title="CSS" />
        </div>
      )
    } else {
      return (
        <div className="flex-container">
          <p>To get started, enter a url</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    htmlResults: state.htmlResults,
    cssResults: state.cssResults,
    hasUrl: state.ui.hasUrl,
    isFetching: state.isFetching,
  }
}

export default connect(
  mapStateToProps
)(ResultsContainer);
