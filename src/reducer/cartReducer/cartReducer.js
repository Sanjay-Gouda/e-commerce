const intialState ={
    cartItem: []
}

export const cartReducer = (state = intialState, action) =>{

    switch(action.type){
        case 'CART_ITEM':
            return{
                ...state,
                cartItem:[...state.cartItem,action.payload],
            }

        case 'REMOVE_ITEM':
                const removeItem = state.cartItem.filter((item)=>{
                    return item.id !== action.payload
                })

                return{
                    ...state,
                    cartItem: removeItem
                }

          
        default: return state
    }

}
