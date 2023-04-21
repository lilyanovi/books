import * as types from '../catalog/types'

export const setCards = (data) => {
    return {
        type: types.SET_CARDS,
        payload: data   
    }
}

export const deleteCard = (id) => {
    return {
        type: types.DElETE_CARD,
        payload: id   
    }
}

export const likeCard = (key) => {
    return {
        type: types.LIKE_CARD,
        payload: key
    }
}