import * as types from '../catalog/types'

const initialState = {}

export const catalogReducer = (state = initialState, action) => {
    const { type, payload } = action
    const cards = { ...state}

    switch(type) {
       
        case types.SET_CARDS:
            const newSet = Object.assign({}, 
                [...Object.values(cards), ...Object.values({...payload})])
            return newSet

        case types.DElETE_CARD:      
            const cardsDel = Object.values(cards).filter((card) => card.id !== payload)
            const cardsNew = Object.assign(cardsDel)
            return cardsNew
        
        case types.LIKE_CARD:     
            const cardLike = Object.entries(cards).find((card)=> card[1].id === payload)
            const likeInd = cardLike[0]
            if(cards[likeInd].like === true){
                cards[likeInd].like = false
            } else {
                cards[likeInd].like = true
            }   
            return cards

        default:
            return state
    }
}