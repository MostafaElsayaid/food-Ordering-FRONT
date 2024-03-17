/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { useFoodContext } from "../../context/foodContext";
import Foods from "../component/Foods";
import { baseUrl } from "../url";

const TodaySelction = ()=>{
    const [ratedFood, setRatedFood] = useState([])
    const { food, setFood } = useFoodContext()
    const getFoods = async () => {
        try {
            fetch(`${baseUrl}food/getTopRated`, {
                method: 'GET'
            }).then(res => res.json()).then(data => {
                if (data.success) {
                    setRatedFood(data.data.food)

                }

            })
        } catch (error) {
            console.log(error)

        }
    }
    console.log(ratedFood)
    useEffect(() => {
        getFoods()
    }, [ratedFood])
return(
    <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[2vh]">
                <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
                    Recommended<span className="text-[#f54748]"> foods</span>
                </div>
                <div className="grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
               {
                ratedFood?.map(curElem=><Foods curElem={curElem}/>)
               }
               </div>
                </div>
            </div>
)
}

export default TodaySelction