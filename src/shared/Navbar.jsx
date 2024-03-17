/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import { useCartContext } from "../../context/cartContext";





const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()
    const { user, setUser } = useUserContext()
    console.log(user)

    const handleNav = () => {
        setNav(!nav)
    }

    const { cartItems } = useCartContext()
    console.log(cartItems)
    return (
        <>
            <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">
                {
                    user?.user.isVerified === false && (<div className="bg-red-500 py-3 px-4 text-white">

                        <Link to='/verifyOtp'> Please verfiy your Email Now</Link>
                    </div>
                    )

                }
                <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6 container mx-auto">
                    <div className="flex  items-center justify-between">

                        <Link to='/'>
                            <img src={logo} alt="" className="h-14 cursor-pointer" />
                        </Link>
                        <div className="lg:flex hidden gap-8 items-center">
                            <Link to='/todaySelction' className="text-[#191919] text-xl font-medium hover:text-red-500">Today selction</Link>
                            
                            <Link to='/menu' className="text-[#191919] text-xl font-medium hover:text-red-500">Our Menu</Link>
                            {
                                user?.user?.role === 'admin' && <Link to='/addfood' className="text-[#191919] text-xl font-medium
                                hover:text-red-500" > Add Food
                                </Link>
                            }

                            <a href="" className="text-[#191919] text-xl font-medium hover:text-red-500">Popular food</a>

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item text-red-500">{cartItems?.length || 0}</span>
                                    </div>
                                </div>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-red-200 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg ">{cartItems?.length || 0} Items</span>

                                        <div className="card-actions">
                                            <Link to='/viewcart'>
                                            <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-10 text-xl font-medium text-white py-2 mb-3 mt-3 " type="submit" >
                            View Cart</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                user ? (<div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.user.profileImage} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                                        <li>
                                            <Link to='/Profile' className="justify-between">
                                                Profile

                                            </Link>
                                        </li>
                                        <li>
                                        {
                                user?.user?.role === 'admin' && <Link to='/allOrders' className="text-[#191919] justify-between" > All Orders
                                </Link>
                            }
                                        </li>
                                       
                                        <li>
                                            <Link to='/myOrder' className="justify-between">
                                                My Order

                                            </Link>
                                        </li>

                                        <li><button onClick={() => {
                                            localStorage.clear()
                                            location.reload()
                                            navigate("/")
                                        }}>Logout</button></li>
                                    </ul>
                                </div>) : (<Link to='/login'>
                                    <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-8 text-xl font-medium text-white py-2" >
                                        Log in</button>
                                </Link>)
                            }



                        </div>
                        <div className=" lg:hidden z-40 justify-between flex  " >
                        <div className="dropdown dropdown-end mr-4 mt-1">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge badge-sm indicator-item text-red-500">{cartItems?.length || 0}</span>
                                    </div>
                                </div>
                                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-red-200 shadow">
                                    <div className="card-body">
                                        <span className="font-bold text-lg ">{cartItems?.length || 0} Items</span>

                                        <div className="card-actions">
                                            <Link to='/viewcart'>
                                            <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-10 text-xl font-medium text-white py-2 mb-3 mt-3 " type="submit" >
                            View Cart</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative mr-6">
                                {
                                    user ? (<div className="dropdown dropdown-end">
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS Navbar component" src={user?.user.profileImage} />
                                            </div>
                                        </div>
                                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                                            <li>
                                                <Link to='/Profile' className="justify-between hover:text-red-500">
                                                    Profile

                                                </Link>
                                            </li>
                                            <li>
                                        {
                                user?.user?.role === 'admin' && <Link to='/allOrders' className="text-[#191919] justify-between" > All Orders
                                </Link>
                            }
                                        </li>
                                            <li>
                                            <Link to='/myOrder' className="justify-between">
                                                My Order

                                            </Link>
                                        </li>
                                            <li><button onClick={() => {
                                                localStorage.clear()
                                                location.reload()
                                                navigate("/")
                                            }}>Logout</button></li>
                                        </ul>
                                    </div>) : (<Link to='/login'>
                                        <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-8 text-xl font-medium text-white py-2" >
                                            Log in</button>
                                    </Link>)
                                }
                            </div>
                            <div className="relative mt-3" onClick={handleNav}>
                                {
                                    nav ? (<RxCross2 size={25} className="text-[#191919] cursor-pointer" />) : (<IoMenu
                                        className="text-red-500 cursor-pointer" size={25} />)
                                }
                            </div>

                        </div>


                    </div>

                    <div className={`lg-hidden ease-in absolute w-1/2 sm:w-2/5 h-screen px-4 py-4 text-xl font-medium  shadow-sm backdrop-blur-md
                  bg-white top-0 duration-500 ${nav ? "right-0" : "right-[-100%]"} pt-24 `}>

                        <div className="flex flex-col gap-8 ">
                            <a href="" className="text-[#191919] text-base font-medium hover:text-red-500">Today selction</a>
                            
                            <Link to='/menu' className="text-[#191919] text-base font-medium hover:text-red-500">Our Menu</Link>
                            {
                                user?.user?.role === 'admin' && <Link to='/addfood' className="text-[#191919] text-xl font-medium
                                hover:text-red-500" > Add Food
                                </Link>
                            }

                            <a href="#Special" className="text-[#191919] text-xl font-medium hover:text-red-500">Popular food</a>


                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Navbar