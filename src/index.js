import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'normalize.css'
import './index.css'
import App from './components/App'

import reducer from './reducers'
import middleware from './middleware'
import { handleInitialData } from './actions/shared'


const store = createStore(reducer, middleware)
store.dispatch(handleInitialData())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)