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

        case types.DElETE_CARD:
            const cards = { ...state}
            Object.keys(cards).forEach((key)=>{
             if(cards[key].id === payload) {
                delete cards[key]
               }          
            })
            return cards

        default:
            return state
    }
}