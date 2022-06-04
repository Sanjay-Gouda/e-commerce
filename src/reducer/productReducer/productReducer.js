const intialState = []

export const productReducer = (state=intialState , action) =>{
    
    switch(action.type){
        case 'COLLECT_ITEM':
                return{
                       ...state,
                       intialState : action.payload 
                }
        default:
            return state;
    }
}
