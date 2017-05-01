import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import DevTools from './components/DevTools'
import store from './store'
import App from './components/App'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
