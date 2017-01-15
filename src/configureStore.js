import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'


const configureStore = () => {
  const logger = createLogger();
  
  return createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
}

export default configureStore;
