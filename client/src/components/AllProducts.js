import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AllProducts = () =>{
    const [products, setProducts] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false);
    

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log("************")
            console.log(res)
            console.log("*************")
            setProducts(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })
    },[deleteClicked, products])

    // delete stuff here maybe
    const deleteProductClickHandler = (e, productId)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
        .then(res=>{
            console.log("*********")
            console.log(res)
            console.log("**********")
            //possibly change to toggle not itself !
            setDeleteClicked(!deleteClicked);
        })
        .catch(err=>{
            console.log(err)
        })
    }




    return(
        <div>
            <h1>All Products</h1>
            {
                products.map((product, i)=>{
                    return<div key = {i}>
                        <p><Link to={`/products/${product._id}`}>{product.title}</Link> <Link onClick ={(e)=>deleteProductClickHandler(e, product._id)} className = "text-danger" to ='/'>Delete</Link>   </p>
                        
                    </div>
                })
            }
        </div>
    );
};

export default AllProducts;