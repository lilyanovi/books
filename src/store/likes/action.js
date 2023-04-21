import * as types from '../likes/types'

export const changeLike = (data) => {
    return {
        type: types.CHANGE_LIKE,
        payload: data
    }
}

export const deleteLikesCard = (id) => {
    return {
        type: types.DElETE_LIKES_CARD,
        payload: id   
    }
}
