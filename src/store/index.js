import { createStore, compose, combineReducers } from 'redux'
import { catalogReducer } from './catalog/reduser'
import { filterReducer } from './filter/reducer'
import { showFilterReducer } from './showFilter/reduser'
import { likesReducer } from './likes/reduser'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const  rootReducer = combineReducers({
    catalog: catalogReducer,
    filter: filterReducer,
    showFilter: showFilterReducer,
    likes: likesReducer
})

export const store = createStore(rootReducer, composeEnhancers())