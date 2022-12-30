// For add item in the cart

export const addCart = (product)=>{
    return {
        type : "ADDITEM",
        payload : product
    }
}


//  for delete item from the cart
export const delCart = (product) =>{
    return {
        type : "DELITEM",
        payload : product
    }
}