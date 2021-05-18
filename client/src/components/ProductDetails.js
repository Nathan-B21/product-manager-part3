import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const ProductDetails = (props) =>{
    const [productInfo, setProductInfo] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=>{
            console.log("*******")
            console.log(res)
            setProductInfo(res.data.results);
            console.log("*********")

        })
        .catch(err=> console.log(err))
    }, [])

    // delete handler here maybe
    const deleteProductClickHandler = ()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${props.id}`)
        .then(res=>{
            console.log("*********")
            console.log(res)
            console.log("********")
            navigate("/")
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return(
        <div>
            <h1> {productInfo.title}</h1>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.desc}</p>
            <button onClick = {deleteProductClickHandler} className="btn-danger">Delete</button>

        </div>
    );
};

export default ProductDetails;