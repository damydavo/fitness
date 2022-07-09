import { createContext, useState } from "react";

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [ exercises, setExercises ] = useState([])
  const [ bodyParts, setBodyParts ] = useState([])

return <SearchContext.Provider value= {{ 
    bodyParts,
    exercises,
    setExercises,
    setBodyParts,

}}>

{children}
</SearchContext.Provider>

}

export default SearchContext