import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import initializeFirebase from './firebase'
import DevTools from './components/DevTools'
import store from './store'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

initializeFirebase()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)

module.hot.accept('./components/App', () => {
  const NextApp = require('./components/App').default

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <DevTools />
        <NextApp />
      </div>
    </Provider>,
    document.getElementById('root')
  )
})
