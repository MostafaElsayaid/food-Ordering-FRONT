/* eslint-disable no-unused-vars */
import React from "react"
import chef from "../assets/girl-smile-eggs-milk-wallpaper-preview.jpg"

const Service2 = () => {
    return (
        <div className="py-3  px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[2hv]">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                    <div className="w-full md:w-[32rem] flex flex-col space-y-6">
                        <div className="text-2xl md:text-3xl font-bold text-[#2e2e2e] lg:text-4xl ">
                            We are <span className="text-[#f54748]">more</span> than <span className="text-[#fdc55e]">multiple service</span>

                        </div>
                        <div className="lg:text-lg text-[#191919] md:text-base text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni alias quisquam dolor 
                            temporibus labore! Quae magni sequi blanditiis alias reiciendis?
                        </div>
                        <div className="flex gap-8 items-center">
                            <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl
                            shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
                                About Us
                            </button>
                        </div>
                    </div>
                    <img src={chef} alt="" className="h-[22rem] mx-auto justify-end rounded-full" />

                </div>

            </div>
        </div>
    )
}

export default Service2