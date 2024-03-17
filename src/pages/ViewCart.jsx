/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useCartContext } from "../../context/cartContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useFoodContext } from "../../context/foodContext";
import { Link } from "react-router-dom";


 

const ViewCart = () => {
    const { cartItems, removeItem, addToCart } = useCartContext()
    
    
    
    const itemsPrice = cartItems.reduce((a, c) => a +  c.price*c.qty , 0)
    const taxPrice =  itemsPrice * 0.10;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20
    const totalPrice = itemsPrice + shippingPrice + taxPrice 

    return (
        <div className="pt-14">
            <div className={cartItems?.lenght === 0 ? 'bg-gray-100 h-96' : 'bg-gray-100'}>
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
                            cartItems?.map((food) => {
                                return (
                                    <CartFood food={food} />
                                )
                            })
                        }
                        <div className={cartItems.lenght === 0 ? "mx-auto hidden items-end justify-center px-6 flex-col ":
                        "mx-auto justify-center px-6 flex-col"}>
                            <div className="text-right mb-2 font-semibold text-red-900">
                                Shipping:{shippingPrice}
                            </div>
                            <div className="text-right mb-2 font-semibold text-red-900">
                                Taxis:{taxPrice}
                            </div>
                            <div className="text-right mb-2 font-semibold text-red-900">
                                TotalPrice:{totalPrice}
                            </div>
                            <Link to='/order'>
                            <button className="btn justify-end text-white hover:bg-red-600 hover:border-red-600 btn-sm bg-red-500">
                                Check out
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default ViewCart

const CartFood = ({ food }) => {
    const { cartItems, removeItem, addToCart } = useCartContext()
   
    return (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
            <div className="flex ">
                <div className="w-20">
                    <img src={food?.foodImage} alt="" className="h-20" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">
                        {food?.name}
                    </span>
                    <span className="flex items-center space-x-4">
                        <div className="shadow-sm text-white bg-red-500 hover:bg-red-700  cursor-pointer p-4
                rounded-full relative" onClick={() => removeItem(food)}>
                            <AiOutlineMinus size={10} className="absolute  font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <span className="text-red-500 px-3 py-2 bg-slate-100 text-lg font-medium">
                            {food.qty}
                        </span>
                        <div className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-4
                rounded-full relative" onClick={() => addToCart(food)}>
                            <AiOutlinePlus size={10} className="absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </span>
                </div>
            </div>
            <div className="mt-1  mb-1 ml-20 ">
                            <p className="font-semibold text-gray-900 text-xs uppercase  m-2">
                                Food Name : <span className="text-red-500">{food?.name}</span>
                            </p>
                            <p className="font-semibold text-gray-900 text-xs uppercase m-2">
                                Category  : <span className="text-red-500">{food?.category}</span>
                            </p>
                            <p className="font-semibold text-gray-900 text-xs uppercase m-2">
                                Price    :<span className="text-red-500">{food?.price}</span> 
                            </p>
                            <p className="font-semibold text-gray-900 text-xs uppercase m-2">
                                Quantity    :<span className="text-red-500">{food?.qty}</span> 
                            </p>
                            <p className="font-semibold text-gray-900 text-xs uppercase m-2">
                                Total food Price   : <span className="text-red-500">{food?.price*food?.qty}</span> 
                            </p>
                        </div>

          
        </div>
    )
}