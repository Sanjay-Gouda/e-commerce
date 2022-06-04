
import './checkoutItem.css'
import{removeCartItem} from '../../actions/cartItem/cartItem'
import {useDispatch} from 'react-redux'; 
export const CheckOutItem = (props) => {
    console.log(props)
    const {price,id,title,image}= props.item

    const dispatch = useDispatch();

    const handleAdd=(price) => {
        let intialPrice = 0;
        
        let afterAdd =  intialPrice+price;
        console.log(afterAdd);

    }

    const handleRemove= (id)=>{
        

        dispatch(removeCartItem(id));

    }


    return(
        <div className="checkout-item">
        <div className="image-container">
            <img src={image} alt="cartItem image"/>

            <div className="action">

            <span onClick={()=>handleAdd(price)}>+</span>
            <span>-</span>
            </div>

        </div>


        <div className="header-block">
        <span >{title}</span>
        </div>

        <div className="header-block">
        <span >{price}</span>
        </div>

        <div className="header-block">
        <span onClick={()=>handleRemove(id)}>X</span>
        </div>


    </div>
    )
}