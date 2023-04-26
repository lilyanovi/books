import * as types from '../showFilter/types'

const initialState = {
    showLikes: false,
    showSearch: false
}

export const showFilterReducer = (state = initialState, action) => {
    const { type, payload } = action
   

    switch(type) {
       
        case types.SHOW_LIKES:
            const {showLikes} = state
            if (showLikes) {
                state.showLikes = false
            } else {
                state.showLikes = true
            }
            return state

        case types.SHOW_SEARCH:
            state.showSearch = payload 
            return state


        default:
            return state
    }
}