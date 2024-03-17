/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageNavigation from "../component/PageNavigation";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useCartContext } from "../../context/cartContext";
import { baseUrl } from "../url";

const FoodPage = () => {
    const params = useParams()
    const [foodDetails, setFoodDetails] = useState([])
    const getFoodDetails = async () => {
        try {
            fetch(`${baseUrl}food/getFood/${params.id}`, {
                method: 'GET'


            }).then(res => res.json()).then(data => {
                if (data.success) {
                    setFoodDetails(data.data.food)


                }

            })
        }
        catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getFoodDetails()
    }, [])
    console.log(foodDetails)
    const {addToCart} = useCartContext([foodDetails])
    const CartFood = ({ foodDetails })
    const { cartItems, removeItem } = useCartContext()

    
    return (
        <div className="pt-[16vh]">
            
            <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
                <div className="container mx-auto">
                    <PageNavigation title={foodDetails?.name} />
                    <div className="grid grid-cols-1 md:grid-cols-2 pb-14 gap-8 ">
                        <div className="bg-red-200/[.3] border rounded-md mb-5 p-4">
                            <img src={foodDetails?.foodImage} alt="" className="w-full h-[25rem] cursor-pointer" />
                        </div>
                        <div className="bg-red-200/[.3] border rounded p-8 text-black mb-5">
                            <div className="text-2xl font-bold text-[#f54784] ">
                                {foodDetails?.name}
                            </div>
                            <div className="text-2xl font-bold text-yellow-500 py-2">
                               price: ${foodDetails?.price}
                            </div>
                            <div className="text-1xl text-justify text-black mb-6 ">
                                {foodDetails?.description}
                            </div>
                            <div className="flex items-center justify-between mb-6">
                                
                               
                                
                              
                            </div>
                            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0
                                 sm:gap-5 sm:mx-auto sm:justify-center">
                                    <button className="bg-white active:scale-90 transtion duration-500
                        transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-red-600">
                                       Favourite
                                    </button>
                                  
                                    <button className="bg-[#f54748] active:scale-90 transtion duration-500
                        transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white" onClick={()=>addToCart(foodDetails)}>
                                       Add to Card 
                                    </button>
                                    
                                </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 pb-14 md:grid-cols-2 grid-cols-2 gap-8  ">
                        <div className="bg-[#f54748] py-4 text-center text-white font-semibold">
                            category :{foodDetails?.category}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FoodPage