/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

const FoodContext = createContext()

const FoodProvider=({children})=>{
    const [food,setFood] = useState(null)
    return(
        <FoodContext.Provider value={{food,setFood}}>
            {
                children
            }

        </FoodContext.Provider>
    )
}

const useFoodContext = ()=>{
    return useContext(FoodContext)
}

export {FoodProvider,useFoodContext}