import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Edit = (props)=>{
    const [productInfo, setProductInfo] = useState({
        title:"",
        price:"",
        desc:""

    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
        .then(res=>{
            console.log(res)
            setProductInfo(res.data.results)
        })
        .catch(err=>console.log(err))
    }, [])

    const updateInfo = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props.id}`, productInfo)
        .then(res=>{
            console.log(res)
            navigate("/")
        })
        .catch(err=>console.log(err))
    }

    const changeHandler = (e) =>{
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }


    return(
        <div>
            <h3>Edit Product</h3>
            <form onSubmit={updateInfo}>
                <div className = "form-group">
                    <label>Title</label>
                    {/* {errors.title?<p className="text-danger">{errors.title.message}</p>: ""} */}
                    <input onChange={changeHandler} type = "text" name = "title" className="form-control" value = {productInfo.title}></input>

                </div>
                <div className = "form-group">
                    <label>Price</label>
                    {/* {errors.price?<p className="text-danger">{errors.price.message}</p>: ""} */}
                    <input onChange={changeHandler} type = "text" name = "price" className="form-control" value = {productInfo.price}></input>
                </div>
                <div className = "form-group">
                    <label>Description:</label>
                    {/* {errors.desc?<p className="text-danger">{errors.desc.message}</p>: ""} */}
                    <textarea onChange={changeHandler} name="desc" id="" cols="30" rows="10" className="form-control" value = {productInfo.desc}></textarea>
                </div>
                <input type="submit" value="Update Form!"></input>
            </form>
        </div>

    );
};
export default Edit;