import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MainContainer from './containers/MainContainer/MainContainer';
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('app')
)
