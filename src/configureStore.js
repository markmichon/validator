import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  let createLogger = require('redux-logger')
  const logger = createLogger();
  middleware = [...middleware, logger];
}

const configureStore = () => {
    return createStore(
      rootReducer,
      applyMiddleware(...middleware)
    );
}

export default configureStore;
