import * as types from '../showFilter/types'

export const showLikesFilter = (data) => {
    return {
        type: types.SHOW_LIKES,
        payload: data
    }
}

export const showSearchFilter = (data) => {
    return {
        type: types.SHOW_SEARCH,
        payload: data
    }
}