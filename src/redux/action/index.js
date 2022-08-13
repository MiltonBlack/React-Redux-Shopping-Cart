// for adding item to cart

export const addCart = (product) => {
    return {
        type:"ADDCART",
        payload: product
    }
}

// for deleting items from cart

export const removeCart = (product) => {
    return {
        type:"REMOVECART",
        payload: product
    }
}