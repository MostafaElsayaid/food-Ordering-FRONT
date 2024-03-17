/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import avatar from "../assets/avater.jpg"
import { useUserContext } from "../../context/userContext";
import { baseUrl } from "../url";
const Profile = () => {
    const navigate = useNavigate()
    const [image, setIamge] = useState({})
    const { user, setUser } = useUserContext()
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
        const country = from.country.value
        const city = from.city.value
        const street = from.street.value
        const state = from.state.value
        const zipCode = from.zipCode.value

        const profileImage = image?.url

        const userData = { name, profileImage, country, city, street, state, zipCode }
        try {
            const res = await axios.put(
                `${baseUrl}user/update`, {
                userId: user.user._id,
                name,
                country,
                city,
                state,
                zipCode,
                profileImage,
                street

            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
            )
            if (res.data.success) {

                toast.success(res.data.message)
                from.reset();
                location.reload()
                
            } else {
                toast.error(res.data.message)
            }

        } catch (error) {

            console.log(error)
        }



    }

    return (
        <div className="profile">
            <div className="w-full mx-auto pt-[16vh]" >
                <form className="ease-in duration-300  w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/20 
                lg:w-max mx-auto items-center rounded-md px-8 py-2" onSubmit={handleOnSubmit} >
                    <label className=" ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 
                    lg:w-max mx-auto flex flex-col items-center rounded-md px-8 py-5">
                        <img src={image?.url || user?.user.profileImage} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer" />

                    </label>
                    <label className="block text-center text-gray-900 text-base mb-2"> Profile Picture</label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" label="Image" id="file-upload" name="myFile" accept=' .jpeg .png .jpg' onChange={handleImage} />

                    <div className="mb-3 mt-3">

                        <input type="text" name="name" placeholder={user?.user?.name} className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>

                    <div className="mb-3 ">

                        <input type="text" name="country" placeholder={user?.user?.country || "country"} className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="mb-3 ">

                        <input type="text" name="city" placeholder={user?.user?.city || "city"} className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="mb-3 ">

                        <input type="text" name="street" placeholder={user?.user?.street || "street"} className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="mb-3 ">

                        <input type="text" name="state" placeholder={user?.user?.state || "state"} className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="mb-3 ">

                        <input type="text" name="zipCode" placeholder={user?.user?.zipCode || "zipCode"} className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>



                    <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-32 text-xl font-medium text-white py-2 mb-3 mt-3 " type="submit" >
                        update profile</button>



                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}

export default Profile