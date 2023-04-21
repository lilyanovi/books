import * as types from '../showFilter/types'

const initialState = {
    showLikes: false
}

export const showFilterReducer = (state = initialState, action) => {
    const { type } = action
   

    switch(type) {
       
        case types.SHOW_LIKES:
            const {showLikes} = state
            if (showLikes) {
                state.showLikes = false
            } else {
                state.showLikes = true
            }
            return state



        default:
            return state
    }
}