import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardCatalogContainer from './containers/CardCatalogContainer';
import AppContainer from './containers/AppContainer';
import MovieIndex from './components/movieIndex';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import './main.scss';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, devTools, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
     document.getElementById('main'))
