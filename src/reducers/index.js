import { combineReducers } from 'redux'

const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'VALIDATE_HTML_REQUEST':
      return true;
    case 'VALIDATE_HTML_SUCCESS':
    case 'VALIDATE_HTML_FAILURE':
      return false;
    default:
      return state;
  }
};

const htmlResults = (state = {}, action) => {
  switch (action.type) {
    case 'VALIDATE_HTML_SUCCESS':
      return Object.assign({}, action.response, {resultType: 'HTML'});
    default:
      return state;
  }
}

const cssResults = (state = {}, action) => {
  switch (action.type) {
    case 'VALIDATE_CSS_SUCCESS':
      return Object.assign({}, action.response, {resultType: 'CSS'});
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  isFetching,
  htmlResults,
  cssResults,
});

export default rootReducer;
