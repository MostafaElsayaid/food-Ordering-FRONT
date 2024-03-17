/* eslint-disable no-unused-vars */
import React from "react";
import { FaPlay, FaSearch } from "react-icons/fa"

import header from "../assets/header.jpg"
import item2 from "../assets/item2.jpeg"
import item3 from "../assets/item3.jpeg"
import item4 from "../assets/item4.jpeg"


const Header = () => {
    return (
        <div className="py-6 px-5 sm:px-5 md:px-6 lg:px-6 ">
            <div className="container mx-auto py-[16vh]">
                <div className="grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center">
                    <div className="lg:w-[32rem] w-full flex flex-col space-y-6">
                        <div className="text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl">
                            we are <span className="text-[#f54748]">Serious </span>for <span className="text-[#f54748]"> food </span> &
                            <span className="text-[#fdc55e]"> Delivery .</span>
                        </div>
                        <div className="lg:text-xl text-[#191919] md:text-lg text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, voluptates fugiat nam tempora laboriosam deserunt
                            quis delectus? Dolorum, vitae, magnam quod vero veniam aliquid, delectus quae cupiditate nobis earum odit
                            porro?
                        </div>
                        <div className="flex rounded-full py-2 px-5 justify-between items-center bg-white shadow-md">
                            <div className="flex items-center">
                                <FaSearch size={22} className="cursor-pointer" />
                                <input type="text" placeholder="Search food here..." className="text-[#191919] w-full border-none outline-none py-2 px-4" />
                            </div>
                            <div className="h-10 w-10 relative bg-[#fdc55e] rounded-full">
                                <FaSearch size={15} className="cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-8 items-center" >
                            <button className="bg-[#f54748] active:scale-90 transtion duration-500
                        transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white">
                                explore now
                            </button>
                            <div className="flex gap-4 items-center ">
                                <div className="h-14 w-14 shadow-md cursor-pointer relative bg-white rounded-full">
                                    <FaPlay size={18} className="cursor-pointer text-red-500 
                              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
                                </div>
                                <div className="lg:text-xl  text-[#191919] md:text-lg text-base cursor-pointer">Watch Now</div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel w-full rounded-md">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={header} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle bg-red-300">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-red-300">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={item2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle bg-red-300">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-red-300">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={item3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle bg-red-300">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-red-300">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={item4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle bg-red-300">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red-300">❯</a>
    </div>
  </div>
</div>                </div>
            </div>
        </div>
    )
}

export default Header