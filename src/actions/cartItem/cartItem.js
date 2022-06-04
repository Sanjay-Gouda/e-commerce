

export const cartItem = (payload)=>{
    console.log({payload})
    return{
        type: 'CART_ITEM',
        payload
    }
}

export const removeCartItem =(payload)=>{
    console.log({payload})
  return{
    type:'REMOVE_ITEM',
    payload
  }
} 