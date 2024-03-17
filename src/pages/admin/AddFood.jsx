/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/logo.jpg";
import axios from "axios";
import { baseUrl } from "../../url";





const Addfood = () => {
    const [image, setIamge] = useState({})
    const [uploading, setUploading] = useState(false)
    const handleImage = async (e) => {
        const file = e.target.files[0]
        let formData = new FormData()
        formData.append('image', file)
        setUploading(true)
        try {
            const { data } = await axios.post(`${baseUrl}all/upload-image`, formData)
            setUploading(false)
            setIamge({
                url: data.url,
                public_id: data.public_id
            })
            
            toast.success('successfully uploaded')
        } catch (error) {
            console.log(error)
        }
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const price = from.price.value
        const category = from.category.value
        const description = from.description.value


        const foodImage = image?.url

        const userData = { name, foodImage, price, category, description }

        console.log(userData);

        fetch(`${baseUrl}food/addfood`, {
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
                        <img src={image?.url || logo} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer" />

                    </label>
                    <label className="block text-center text-gray-900 text-base mb-2"> Profile Picture</label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" label="Image" id="file-upload" name="myFile" accept=' .jpeg .png .jpg' onChange={handleImage} />

                    <div className="mb-3 ">
                        <label className="block text-gray-700 text-sm mb-2 ">Name</label>
                        <input type="text" name="name" placeholder="Enter your name" className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="mb-3 ">
                        <label className="block text-gray-700 text-sm mb-2 " >price</label>
                        <input type="number" name="price" placeholder="Enter food price" className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="mb-3 ">
                        <select className="select select-warning w-full max-w-xs by-4" name="category">
                            <option disabled selected>select category</option>
                            <option>rice</option>
                            <option>checkin</option>
                            <option>dessert</option>
                            <option>snaks</option>
                            <option>beef</option>
                            <option>Drinks</option>

                        </select>
                    </div>


                    <div className="mb-3 ">
                        <label className="block text-gray-700 text-sm mb-2 ">description</label>
                        <input type="text" name="description" placeholder="Enter your description" className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="flex flex-col md:flex-row md:gap-4 items-center ">
                       
                    </div>
                    <div className="items-center">
                        <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-32 text-xl font-medium text-white py-2 mb-3 mt-3 " type="submit" >
                            Add Food</button>
                    </div>


                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Addfood