import { combineReducers } from "redux"

const getCounts = results => {
  if (results.errors && results.warnings) {
    return [
      {
        type: "error",
        count: results.errors.length
      },
      {
        type: "warning",
        count: results.warnings.length
      }
    ]
  }
  return
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case "VALIDATE_HTML_REQUEST":
      return true
    case "VALIDATE_HTML_SUCCESS":
    case "VALIDATE_HTML_FAILURE":
      return false
    default:
      return state
  }
}

const htmlResults = (state = {}, action) => {
  switch (action.type) {
    case "VALIDATE_HTML_SUCCESS":
      return Object.assign({}, action.response, {
        resultType: "HTML",
        counts: getCounts(action.response)
      })
    default:
      return state
  }
}

const cssResults = (state = {}, action) => {
  switch (action.type) {
    case "VALIDATE_CSS_SUCCESS":
      return Object.assign({}, action.response, {
        resultType: "CSS",
        counts: getCounts(action.response)
      })
    default:
      return state
  }
}

let initUiState = {
  hasUrl: false
}

const ui = (state = initUiState, action) => {
  switch (action.type) {
    case "VALIDATE_HTML_SUCCESS":
    case "VALIDATE_CSS_SUCCESS":
      return Object.assign({}, state, { hasUrl: true })
    case "SET_URL":
      return Object.assign({}, state, { url: action.url })
    default:
      return state
  }
}

const resultsReducer = combineReducers({
  css: cssResults,
  html: htmlResults
})

const rootReducer = combineReducers({
  ui,
  isFetching,
  results: resultsReducer
})

export default rootReducer
