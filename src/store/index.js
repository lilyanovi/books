import { createStore, compose } from 'redux'
import { catalogReducer } from './catalog/reduser'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(catalogReducer, composeEnhancers())