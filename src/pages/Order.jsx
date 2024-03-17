/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg"
import { FaArrowRightToBracket } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from "../../context/cartContext";
import { useUserContext } from "../../context/userContext";
import { useStripe } from '@stripe/react-stripe-js';
import axios from "axios";
import { baseUrl } from "../url";

const Order = () => {
    const { cartItems, removeItem, addToCart } = useCartContext()
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * 0.10;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20
    const totalPrice = itemsPrice + shippingPrice + taxPrice

    const { user } = useUserContext()
    const stripe = useStripe()

    const handleFinish = async () => {
        try {
            const OrderItems = cartItems.map(item => ({
                food: item._id,
                qty: item.qty
            }))
            const res = await axios.post(`${baseUrl}order/order`, {
                user: user?.user._id,
                items: OrderItems,
                totalAmount: totalPrice,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (res.data.success) {
                const result = await stripe.redirectToCheckout({
                    sessionId: res.data.sessionId
                })
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("something wrong")
        }
    }


    return (
        <div className="h-screen pt-[10vh]">
            <div className="ease-in duration-300  w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/20 
                lg:w-[28rem] mx-auto flex flex-col items-center rounded-md px-8 py-5 " >
                <NavLink to="/">
                    <img src={logo} width={180} height={180} alt="" className="logo mb-6 cursor-pointer text-center" />
                </NavLink>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    items price : <span className="text-[#f54748]">${itemsPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    taxis price : <span className="text-[#f54748]">${taxPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    shipping price : <span className="text-[#f54748]">${shippingPrice}</span>
                </div>
                <div className="text-xl text-[#2e2e2e] mb-3">
                    total price : <span className="text-[#f54748]">${totalPrice}</span>
                </div>
                <button className="bg-[#f54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full
                    px-24 text-xl font-medium text-white py-2" onClick={handleFinish} >
                    pay ${totalPrice}</button>


                <ToastContainer />


            </div>

        </div>
    )
}

export default Order