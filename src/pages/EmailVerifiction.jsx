/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"
import { FaArrowRightToBracket } from "react-icons/fa6";
import { toast ,ToastContainer } from "react-toastify";
import { useUserContext } from "../../context/userContext";
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "../url";



const EmailVerifiction = () => {
    const { user } = useUserContext()
    const navigate = useNavigate()
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const from = e.target
        const email = user?.user.email
        const otp = from.otp.value

        const userData = { otp ,email }

        console.log(userData);

        fetch(`${baseUrl}user/verifyOtp`, {
            method: "POST",
            headers: {
                "content-type": "application/json"

            },
            body: JSON.stringify(userData)
        }).then(res => res.json()).then(data => {
            if (data.success) {
                
                    toast.success(data.message)
                from.reset()
                navigate('/')
            }
            else {
                toast.error(data.message)

            }
        });
    }



    return (
        <div className="otp">
             <ToastContainer />
            <div className="h-screen pt-[40vh]">
                <form className="ease-in duration-300  w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/20 
                lg:w-max mx-auto flex flex-col items-center rounded-md px-8 py-5 " onSubmit={handleOnSubmit}>
                   
                    <div className="mb-4 text-center items-center">
                        <label className="block text-gray-700 text-sm mb-2 " >Write your otp</label>
                        <input type="number" name="otp"  className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                    sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            
                    </div>
                   
                    
                    <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-24 text-xl font-medium text-white py-2" type="submit" >
                        Verifiy Email</button>
                    

                       
                       
                </form>
                <div className="flex items-center py-5 pt-40">
                   
                    </div>
                

            </div>
           
        </div>
    )
}

export default EmailVerifiction