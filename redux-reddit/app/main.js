import React from 'react'
import {render} from 'react-dom'
import App from './containers/App'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import {selectSubreddit, fetchPosts, fetchPostsIfNeeded} from './actions'
import rootReducer from './reducers'


const loggerMiddleware = createLogger()
let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

// store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() => {
    console.log(store.getState())
  }
)

render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.body.appendChild(document.createElement('div'))
)
