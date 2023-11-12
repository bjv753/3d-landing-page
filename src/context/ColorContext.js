import { createContext, useState } from "react";



export const ColorContext = createContext({})

export const ColorContextProvider = ({children}) => {

      const [currentColor, setCurrentColor] = useState({
            color: "#9BB5CE",
            text: "Sierra Blue",
            rgbColor: "155, 181, 206"
      })

      return  (
            <ColorContext.Provider value={{currentColor}}>
                        {children}
            </ColorContext.Provider>
      )

}