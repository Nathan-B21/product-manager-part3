import axios from 'axios';
import React, {useState} from 'react';
import {navigate, Navigate} from '@reach/router';
import AllProducts from './AllProducts';

const Create = () =>{
    const[formInfo, setFormInfo] = useState({
        title:"",
        price:"",
        desc:""

    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e)=>{
        console.log("Changing inputs!")
        console.log(e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("submitted")
        axios.post("http://localhost:8000/api/products/create", formInfo)
            .then(res=>{
                console.log("RESPONSE AFTER POSTING!")
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }else{
                    setErrors(res.data.errors)
                }
            })
            .catch(err=> console.log("ERROR", err))
    }

    return(
        <div className="container">
            <h1>Create a product</h1>
            <form onSubmit={submitHandler}>
                <div className = "form-group">
                    <label>Title</label>
                    {errors.title?<p className="text-danger">{errors.title.message}</p>: ""}
                    <input onChange={changeHandler} type = "text" name = "title" className="form-control"></input>

                </div>
                <div className = "form-group">
                    <label>Price</label>
                    {errors.price?<p className="text-danger">{errors.price.message}</p>: ""}
                    <input onChange={changeHandler} type = "text" name = "price" className="form-control"></input>
                </div>
                <div className = "form-group">
                    <label>Description:</label>
                    {errors.desc?<p className="text-danger">{errors.desc.message}</p>: ""}
                    <textarea onChange={changeHandler} name="desc" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <input type="submit" value="Create Form!"></input>
            </form>
            <hr/>
        <AllProducts></AllProducts>


        </div>
    );
};
export default Create;