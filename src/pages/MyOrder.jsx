/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { useUserContext } from "../../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineMinus } from "react-icons/ai";
import { baseUrl } from "../url";

const MyOrder = () => {
    const { cartItems, removeItem, addToCart } = useCartContext()
    const { user, setUser } = useUserContext()
    const [order, setOrders] = useState([])

    const grtMyOrders = async () => {
        try {

            const res = await axios.post(`${baseUrl}order/getorder`, {
                userId: user?.user._id,
                token: localStorage.getItem("token")
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (res.data.success) {
                setOrders(res.data.data)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("something wrong")
        }
    }

    useEffect(() => {
        grtMyOrders()
    }, [])
    console.log(order)

    return (
        <div className="">
            <div className="pt-14">
              
                    <div className="container mx-auto py-6">
                        <div className="w-full bg-white px-10 py-5 text-black rounded:md">
                            <div className="flex justify-between  border-b pb-8">
                                <h1 className="font-semibold text-2xl">
                                    My food cart
                                </h1>
                                <h2 className="font-semibold text-2xl">

                                </h2>
                            </div>

                            {
                                order?.map((food) => {
                                    return (
                                        <CartFood food={food} />
                                    )
                                })
                            }

                        </div>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default MyOrder

const CartFood = ({ food }) => {
    const { cartItems, removeItem, addToCart } = useCartContext()
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex ">
                <div className="w-20 grid grid-cols-3">
                    {
                        food?.items?.map((item) => <>
                            <div className="flex felx-col justify-between ml-4 flex-grow">
                                <div>
                                    <img src={item?.food.foodImage} alt="" />
                                </div>
                                <span className="flex items-center space-x-4">
                                    qty:<span className="text-red-500 px-3 py-2 bg-slate-50 text-lg">
                                        {item?.qty}
                                    </span>
                                </span>
                            </div>
                        </>)
                    }
                    <img src={food?.foodImage} alt="" className="h-20" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">
                        {food?.name}
                    </span>
                    <span className="flex items-center space-x-4">
                        
                    </span>
                </div>
            </div>
            <div className="mt-1  mb-1 ml-20 ">
                
                <p className="font-semibold text-gray-900 text-xs uppercase m-2">
                    Payment : <span className="text-red-500">
                    {

                    food?.payment === false && <span className="font-bold text-sm">not paid</span>
                    
                    }
                    {

                    food?.payment  && <span className="font-bold text-green-500 text-sm">Paid</span>
                    
                    }
                    
                    </span>
                </p>
                <p className="font-semibold text-gray-900 text-xs uppercase m-2">
                    Price    :<span className="text-red-500">{food?.totalAmount}</span>
                </p>
                
                
            </div>


        </div>
    )
}