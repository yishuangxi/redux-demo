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
import { Provider } from 'react-redux'
import App from './components/CounterContainer'
import configureStore from './components/CounterStore'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
)
