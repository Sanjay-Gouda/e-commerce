import {useState, useEffect } from "react";
import './homePage.css';
import {ProductCard} from '../../components/cardComponent/card'
import {productListing} from '../../actions/productListing/productListing'
import {useDispatch} from 'react-redux';
import {dataListing} from '../../actions/dataListing/dataListing'

export const HomePage = ()=>{

    const [product,setProduct] = useState([]);
    const dispatch = useDispatch();

 

    useEffect(()=>{
        dataListing().then((res)=>{
            setProduct(res)
            dispatch(productListing(res))
        })
    },[])

   

    return(
        <div className="product-collection">

            <div className="preview">

            {
                product.map((item)=>{
                    return (
                <ProductCard id={item.id} title={item.title} image={item.image} price={item.price}  />
                    )
                })

            }
            </div>


       

        </div>
    )

}