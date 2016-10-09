// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.jsx';
//
// ReactDOM.render(
//   <App />,
//   document.body.appendChild(document.createElement('div'))
// );

import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import todoApp from './reducers'
let store = createStore(todoApp)
render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.body.appendChild(document.createElement('div'))
)
