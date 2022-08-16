import { createContext, useState } from "react";
export const Cartcontxt=createContext()
export default function CartcontxtProvider({children}){
    const [count, setCount] = useState(0);
    return <Cartcontxt.Provider value={{count,setCount}}>{children}</Cartcontxt.Provider>
}