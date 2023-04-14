import * as types from '../catalog/types'

const initialState = {}

export const catalogReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch(type) {
       
        case types.SET_CARDS:
            return {
                ...state,
                ...payload

            }
            default:
                return state
    }
}