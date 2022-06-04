import './card.css' ;

import {CustomButton} from '../buttonComponent/customButton'
import {useSelector,useDispatch} from 'react-redux'
import {cartItem} from '../../actions/cartItem/cartItem'

export const ProductCard = ({title,image,price,id})=>{

    const getProduct = useSelector((state)=>state.productReducer.intialState)
    
    const dispatch = useDispatch();

    const handleAddtoCart =(id)=>{
        let filterData = getProduct.filter((item)=>item.id===id)

        dispatch(cartItem(...filterData))
        alert("Product added in cart")

    }

    return(
        <div className="collection-item">
        <div
            className="image"
            style={{ backgroundImage:`url(${image})`, backgroundSize:'contain',backgroundRepeat:'no-repeat'}}
        />
        <div className="collection-footer">
            <span className="name" >{title}</span>
            <p  className="price">Price :{price}</p>
          <CustomButton  className="btn btn-primary" handleAddtoCart={()=>handleAddtoCart(id)} btnLabelText="Add to Cart"/>
        </div>
    </div>

    )
}