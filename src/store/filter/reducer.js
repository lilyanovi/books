import * as types from '../filter/types'

const initialState = {}

export const filterReducer = (state = initialState, action) => {
    const { type, payload } = action
   

    switch(type) {
       
        case types.FILTER_SEARCH:
            return {...payload}


        default:
            return state
    }
}