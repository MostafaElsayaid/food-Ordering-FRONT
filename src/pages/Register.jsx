/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowRightToBracket } from "react-icons/fa6";
import avatar from "../assets/avater.jpg"

import axios from "axios";
import { baseUrl } from "../url";


const Register = () => {
    const [image , setIamge] = useState({})
    const [uploading,setUploading] = useState(false)
    const handleImage = async(e)=>{
        const file = e.target.files[0]
        let formData = new FormData()
        formData.append('image' , file)
        setUploading(true)
        try {
            const {data}=await axios.post(`${baseUrl}all/upload-image`,formData)
            setUploading(false)
            setIamge({
                url:data.url,
                public_id: data.public_id
            })
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate()
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        const profileImage = image?.url

        const userData = { name, email, password ,profileImage}

        console.log(userData);

        fetch(`${baseUrl}user/register`, {
            method: "POST",
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                localStorage.setItem("token", data.data.token),
                    toast.success(data.message)
                from.reset()
                navigate('/')
            }
            else {
                toast.error(data.message)

            }
        })
    }

    return (
        <div className="register">
            <div className="w-full mx-auto pt-[16vh]" >
                <form className="ease-in duration-300  w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/20 
                lg:w-max mx-auto items-center rounded-md px-8 py-2" onSubmit={handleOnSubmit} >
                    <label className=" ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 
                    lg:w-max mx-auto flex flex-col items-center rounded-md px-8 py-5">
                        <img src={image?.url || avatar} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer" />

                    </label>
                    <label className="block text-center text-gray-900 text-base mb-2"> Profile Picture</label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" label="Image" id="file-upload" name="myFile"  accept=' .jpeg .png .jpg' onChange={handleImage} />
                    
                    <div className="mb-3 ">
                        <label className="block text-gray-700 text-sm mb-2 ">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="mb-3 ">
                        <label className="block text-gray-700 text-sm mb-2 " >Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="flex flex-col md:flex-row md:gap-4 items-center ">
                        <div className="mb-3 ">
                            <label className="block text-gray-700 text-sm mb-2 ">Password</label>
                            <input type="password" name="password" placeholder="*******" className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                        </div>

                    </div>
                    <div className="items-center">
                        <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-32 text-xl font-medium text-white py-2 mb-3 mt-3 " type="submit" >
                            Register</button>
                    </div>
                    <div className="flex items-center ml-14 py-5">
                        <Link to='/login' className="text-primary  text-center font-semibold  px-2   ">
                            Already have account
                        </Link>
                        <Link to='/login'>
                            <FaArrowRightToBracket size={22} className="cursor-pointer" />
                        </Link >
                    </div>

                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Register