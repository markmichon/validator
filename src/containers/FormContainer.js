import React, { Component } from "react"
import UrlField from "../components/UrlField"
import { connect } from "react-redux"
import { fetchUrl } from "../actions"

import URL from "url-parse"

const cleanUrl = url => {
  const details = new URL(url)
  if (details.protocol) {
    return url
  } else {
    return `https://${url}`
  }
}
class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    // fetch(baseURL + '/ping');
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.fetchUrl(cleanUrl(this.state.url))
  }

  handleUrlChange(e) {
    this.setState({ url: e.target.value })
  }

  render() {
    const { isFetching } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <UrlField controlFunc={this.handleUrlChange} isLoading={isFetching} />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  }
}

export default connect(mapStateToProps, { fetchUrl })(FormContainer)