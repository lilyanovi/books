import * as types from '../likes/types'

const initialState = {}

export const likesReducer = (state = initialState, action) => {
    const { type, payload } = action
    const cards = Object.values({...state})

    switch(type) {
       
        case types.CHANGE_LIKE:
           const cardId = payload.id
            const filterCards = cards.findIndex((card) => {
              return card.id === cardId
            })
           if(filterCards > -1) {   
               delete cards[filterCards]
            } else {        
                cards.push(payload)
            } 
            const likeCards = Object.assign({}, cards)
            return likeCards

        case types.DElETE_LIKES_CARD:      
            const delInd = cards.findIndex((card) => {
            return card.id === payload
          })
          console.log(delInd)
            if(delInd !== -1) {
                delete cards[delInd]}
            const likeCardsWithoutDel = Object.assign({}, cards)
            return likeCardsWithoutDel

        default:
            return state
    }
}