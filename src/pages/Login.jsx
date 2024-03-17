/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"
import { FaArrowRightToBracket } from "react-icons/fa6";
import { toast ,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { baseUrl } from "../url";


const Login = () => {
    const navigate = useNavigate()
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const from = e.target
        
        const email = from.email.value
        const password = from.password.value

        const userData = {  email, password }

        console.log(userData);

        fetch(`${baseUrl}user/login`, {
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
        });
    }



    return (
        <div className="login">
            <div className="h-screen pt-[10vh]">
                <form className="ease-in duration-300  w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/20 
                lg:w-max mx-auto flex flex-col items-center rounded-md px-8 py-5 " onSubmit={handleOnSubmit}>
                    <NavLink to="/">
                        <img src={logo} width={180} height={180} alt="" className="logo mb-6 cursor-pointer text-center" />
                    </NavLink>
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm mb-2 " htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                    sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <div className="mb-4 ">
                        <label className="block text-gray-700 text-sm mb-2 " >Password</label>
                        <input type="password" name="password" placeholder="*******" className="shadow-sm bg-white appearance-none border-red-700 rounded w-full py-2 px-3 
                    sm:w-[20rem] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

                    </div>
                    <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-24 text-xl font-medium text-white py-2" type="submit" >
                        Sign in</button>
                    <div className="flex items-center py-5">
                        <Link to='/register' className="text-primary  text-center font-semibold w-full  px-2">

                            Create an Account

                        </Link>
                        <Link to='/register'>
                            <FaArrowRightToBracket size={22} className="cursor-pointer" />
                        </Link>
                        <ToastContainer />
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Login