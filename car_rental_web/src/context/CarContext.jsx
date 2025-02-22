import { createContext } from "react";
import { cars  } from "../assets/assets"; 

export const CarContext = createContext();

const CarContextProvider = ({ children }) => {  
    
    const value = {
        cars,
       
    };

    return (
        <CarContext.Provider value={value}> 
            {children}  
        </CarContext.Provider>
    );
};

export default CarContextProvider;
