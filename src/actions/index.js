import * as service from "../services/rest"

export const viewResults = type => {
  return {}
}

export const fetchUrl = url => dispatch => {
  dispatch({
    type: "VALIDATE_HTML_REQUEST",
    url
  })

  dispatch({
    type: "VALIDATE_CSS_REQUEST",
    url
  })

  service.validateHTML(url).then(
    response => {
      dispatch({
        type: "VALIDATE_HTML_SUCCESS",
        url,
        response: response
      })
      dispatch({
        type: "SET_URL",
        url
      })
      // dispatch({
      //   type: "SET_RAW_HTML",
      //   response: response.raw
      // })
    },
    error => {
      dispatch({
        type: "VALIDATE_HTML_FAILURE",
        url,
        message: error.message || "Something went wrong with html validation"
      })
    }
  )

  service.validateCSS(url).then(
    response => {
      dispatch({
        type: "VALIDATE_CSS_SUCCESS",
        url,
        response
      })
    },
    error => {
      dispatch({
        type: "VALIDATE_CSS_FAILURE",
        url,
        message: error.message || "Something went wrong with css validation"
      })
    }
  )
}
