import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'
import sagas from './sagas'

export const history = createHistory()

const initialState = {}
const enhancers = []

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  initialState,
  composedEnhancers
)

sagaMiddleware.run(sagas)

export default store