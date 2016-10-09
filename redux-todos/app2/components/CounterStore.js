/**
 * Created by Yi on 09/10/2016.
 */

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './CounterReducer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState)

  //热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./CounterReducer', () => {
      const nextReducer = require('./CounterReducer')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}