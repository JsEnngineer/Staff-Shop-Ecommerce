import { ActionTypes } from "../constants/action-types"


export const setLoaded = (products) => {
    return {
        type: ActionTypes.SET_LOADED,
        payload: products
    }
}

export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}