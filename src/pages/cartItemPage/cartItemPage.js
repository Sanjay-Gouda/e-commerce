import{useEffect,useState} from 'react'
import './cartItemPage.css'
import{useSelector} from 'react-redux'
import { CheckOutItem } from '../../components/checkoutItem/checkoutItem'
export const CartItemPage = ()=>{

    const getCartItem = useSelector((state)=>state.cartReducer.cartItem);
    console.log(getCartItem)
    const[total,setTotal]= useState();

    useEffect(()=>{

        let sum = 0;
        let exactTotal;
        getCartItem.map((item)=>{
            sum = sum+ item.price
            //  exactTotal= sum.toFixed();
        })
        // console.log(exactTotal)
        setTotal(sum)

    },[getCartItem])


    return(
        <>
        
        
              <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>description</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span></span>
                    </div>
                </div>
                    {
                        getCartItem.length === 0 ? 
                        <h3>Your Cart is Empty</h3>
                        
                        :
                            getCartItem.map((item)=>{
                              return (
                                  
                                  <CheckOutItem key={item.id} item={item}/>
                              )
                            })
                        }  
                    
                   <div className="total">

                      {
                        getCartItem.length === 0 ? 
                        
                        <p style={{display:'none'}}>Total:{total}</p>
                        
                        :
                        <p style={{display:'block'}}>Total:{total}</p>

                       
                      }  


                      
                    </div>     
            </div>



            </>
    )

}