/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { baseUrl } from "../../url";


const AllOrder = () => {
    const { user, setUser } = useUserContext()
    const [order, setOrders] = useState([])

    const grtMyOrders = async () => {
        try {

            const res = await axios.post(`${baseUrl}order/getorders`, {
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
                                        <OrderFoods food={food} />
                                    )
                                })
                            }

                        </div>
                    </div>
                    
                </div>
            </div>
        
    )
}

export default AllOrder

const OrderFoods = ({ order }) => {
    const { user, setUser } = useUserContext()
    const handleDeliverd = async (id) => {
        console.log(id)
        try {
            const { res } = await axios.post(`${baseUrl}order/deliverd`, {

                userId: user?.user._id,
                orderId: id,
                token: localStorage.getItem("token")
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            console.log(res.data)
            if (res.data.success) {
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex w-2/5">
                <div className="grid grid-cols-3">
                    {
                        order?.items?.map((item) => <div className="flex flex-col justify-between ml-4 flex-grow">

                            <div>
                                <img className="h-20" src={item?.food?.foodImage} alt="" />
                            </div>
                            <span className="font-bold text-sm">
                                {item?.food?.name}
                            </span>
                            <span className="flex items-center space-x-4">
                                qty:
                                <span className="text-red-600 px-3 py-2 bg-slate-50 text-lg font-medium">
                                    {item?.qty}
                                </span>
                            </span>
                        </div>)
                    }
                </div>
            </div>

            <div className="flex justify-center w-1/5 cursor-pointer">
                {
                    order?.payment === false && <span className="font-bold text-sm">
                        not paid
                    </span>
                }
                {
                    order?.payment && <span className="font-bold text-green-600 text-sm">
                        paid
                    </span>
                }

            </div>
            <div className="flex justify-center w-1/5 cursor-pointer">
                <span className="font-bold text-sm">{order?.status}</span>
            </div>
            <div className="flex justify-center w-1/5 cursor-pointer">
                <button className="px-12 bg-red-600 hover:bg-red-500 text-white font-semibold py-3" onClick={()=>handleDeliverd(order?._id)}>
                         Deliverd
                </button>
            </div>
            <span className="text-center w-1/5 font-semibold  text-sm ">
                {order?.createdAt}
            </span>
            <span className="text-center w-1/5 font-semibold  text-sm ">
                {order?.totalAmount}
            </span>
            <ToastContainer/>
        </div>

    )
}