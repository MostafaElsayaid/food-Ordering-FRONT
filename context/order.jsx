/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

const OrderContext = createContext()

const OrderProvider=({children})=>{
    const [order,setOrder] = useState(null)
    return(
        <OrderContext.Provider value={{order,setOrder}}>
            {
                children
            }

        </OrderContext.Provider>
    )
}

const useOrderContext = ()=>{
    return useContext(OrderContext)
}

export {OrderProvider,useOrderContext}