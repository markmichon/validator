import React, { Component } from 'react'
import UrlForm from '../components/UrlForm'
import { connect } from 'react-redux'
import { fetchUrl } from '../actions'

class FormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }

  handleSubmit(value) {
    this.props.fetchUrl(value);
  }

  render() {
    const { isFetching } = this.props
    if (isFetching) {
      return (
        <p>Loading...</p>
      )
    }
    return (
      <div>
        <h1>Form Container</h1>
        <UrlForm onSubmit={this.handleSubmit.bind(this)} />
      </div>
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
