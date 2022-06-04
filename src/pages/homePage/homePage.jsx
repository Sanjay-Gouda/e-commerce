import {useState, useEffect } from "react";
import './homePage.css';
import {ProductCard} from '../../components/cardComponent/card'
import {productListing} from '../../actions/productListing/productListing'
import {useDispatch} from 'react-redux';

export const HomePage = ()=>{

    const [product,setProduct] = useState([]);

    const dispatch = useDispatch();

    const getData = async()=>{

        const url = "https://fakestoreapi.com/products"
        const response = await fetch(url);
        const jsonData =  await response.json();

        setProduct(jsonData)
        
        //storing data in reducer
        dispatch(productListing(jsonData))
    }

    useEffect(()=>{
        
        getData().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

   

    return(
        <div className="product-collection">
            {/* <h1>Home Page</h1>     */}

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