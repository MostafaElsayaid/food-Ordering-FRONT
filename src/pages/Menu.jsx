/* eslint-disable react/jsx-key */

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useFoodContext } from "../../context/foodContext";
import { FaHeart, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import { useUserContext } from "../../context/userContext";
import { baseUrl } from "../url";

const Menu = () => {


    const { food, setFood } = useFoodContext()
    const [active, setActive] = useState(0)
    const [value, setValue] = useState('All')
    const catagory = [
        {
            id: 0,
            name: 'All',
            value: 'All',
        },
        {
            id: 1,
            name: 'rice',
            value: 'rice',
        },
        {
            id: 2,
            name: 'checkin',
            value: 'checkin',
        },
        {
            id: 3,
            name: 'dessert',
            value: 'dessert',
        },
        {
            id: 4,
            name: 'Drinks',
            value: 'Drinks',
        },
        {
            id: 5,
            name: 'snaks',
            value: 'snaks',
        },
        {
            id: 6,
            name: 'beef',
            value: 'beef',
        }
    ]
    const handleBtn = (btn) => {
        setActive(btn.id)
        setValue(btn.value)
    }

    const params = useParams()


    const getFoods = async () => {
        try {
            fetch(`${baseUrl}food/getAllFoods?category=${value}`, {
                method: 'GET'


            }).then(res => res.json()).then(data => {
                if (data.success) {
                    setFood(data.data.food)


                }

            })
        } catch (error) {
            console.log(error)

        }
    }
    console.log(food)
    useEffect(() => {
        getFoods()
    }, [value])


    const { addToCart } = useCartContext()
    const { user, setUser } = useUserContext()
    console.log(user)
    return (
        <div className="pt-[8vh]">
            <div className="container mx-auto py-8">
                <div className="p-5 mb-14">
                    <div className="flex flex-wrap justify-center mb-8 gap-5">

                    </div>
                    <div className="p-5 mb-14 flex flex-wrap justify-center  gap-5">
                        {
                            catagory?.map(btn => (
                                <button
                                    className={active === btn.id ? "bg-white active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-[#F54748]"
                                        : "bg-[#F54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white"}
                                    onClick={() => {
                                        handleBtn(btn)
                                    }}>{btn.name}</button>
                            ))
                        }

                    </div>
                    <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        {
                            food?.map((curElem) => (
                                <div className="food-card bg-red-500/10 flex flex-col cursor-pointer items-center p-5">
                                    <div className="relative mb-3">
                                        <Link to={`/menu/${curElem?._id}`}>
                                            <img src={curElem?.foodImage} alt="" />
                                        </Link>
                                        <div className="absolute top-2 left-2">
                                            <button className="shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full
                                    relative">
                                                <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                            </button>
                                        </div>
                                        <div className="absolute bottom-2 right-2">
                                            <button className="shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer
                                    p-3 h-14 w-14 text-xl font-bold rounded-full relative">
                                                <div className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">${curElem.price}</div>

                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center">
                                        <p className="text-xl text-center font-bold text-[#f54748] py-4">
                                            {curElem.name}
                                        </p>
                                        <div className="flex text-sm space-x-2 cursor-pointer">
                                            <span className="font-normal text-[#fdc55e]">4.3</span>
                                            <FaStar size={16} className="text-[#fdc55e]" />
                                            <span className="font-medium">({curElem.reviwes.length})</span>

                                        </div>
                                    </div>

                                    <button className="bg-[#f54748] p active:scale-90 transition duration-150
                            transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white" onClick={() => addToCart(curElem)}>

                                        Add To Cart
                                    </button>


                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Menu

