import { createContext } from "react";



export const ColorContext = createContext({})

export const ColorContetxProvider = ({children}) => {

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