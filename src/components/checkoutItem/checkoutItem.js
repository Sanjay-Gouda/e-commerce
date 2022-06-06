import {useState} from 'react'
import './checkoutItem.css'
import{removeCartItem} from '../../actions/cartItem/cartItem'
import {useDispatch} from 'react-redux'; 
import { CustomButton } from '../buttonComponent/customButton';
export const CheckOutItem = (props) => {
    const {price,id,title,image}= props.item
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);

    // const handleAdd=(price) => {
    //     setQuantity(quantity+1)
    // }

    const handleRemove= (id)=>{
        console.log(id)
        dispatch(removeCartItem(id));
    }


    return(
        <div className="checkout-item">
        <div className="image-container">
            <img src={image} alt="cartItem image"/>

            <div className="action">

            {/* <span>-</span>
            <span>{quantity}</span>
            <span onClick={()=>handleAdd(price)}>+</span> */}
            </div>

        </div>


        <div className="header-block">
        <span >{title}</span>
        </div>

        <div className="header-block">
        <span >{price * quantity}</span>
        </div>

        <div className="header-block">
        {/* <span className="remove" onClick={()=>handleRemove(id)}>X</span> */}
        <CustomButton className="btn-danger" handleButton={()=>handleRemove(id)} btnLabelText="Remove" />
        </div>


    </div>
    )
}