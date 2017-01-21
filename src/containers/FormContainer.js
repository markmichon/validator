import React, { Component } from 'react'
import UrlField from '../components/UrlField'
import { connect } from 'react-redux'
import { fetchUrl } from '../actions'
import { baseURL } from '../services/rest'
class FormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    // fetch(baseURL + '/ping');
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchUrl(this.state.url);
  }

  handleUrlChange(e) {
    this.setState({ url: e.target.value });
  }

  render() {
    const { isFetching } = this.props
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form-container"
        >
        <UrlField controlFunc={this.handleUrlChange} isLoading={isFetching}/>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
  }
}

export default connect(
  mapStateToProps,
  { fetchUrl }
)(FormContainer);
