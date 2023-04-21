import * as types from '../filter/types'

export const filterSearch = (data) => {
    return {
        type: types.FILTER_SEARCH,
        payload: data
    }
}
