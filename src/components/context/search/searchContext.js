import { createContext, useState } from "react";

const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [ exercises, setExercises ] = useState([])
  const [ bodyParts, setBodyParts ] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [ExercisesPerPage] = useState(4);

  // Get current exercises
  const indexOfLastExercise = currentPage * ExercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - ExercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  // change page
 const paginate = (pageNumber) => setCurrentPage(pageNumber)

return <SearchContext.Provider value= {{ 
    bodyParts,
    exercises,
    currentPage,
    ExercisesPerPage,
    setExercises,
    setBodyParts,
    currentExercises,
    paginate

}}>

{children}
</SearchContext.Provider>

}

export default SearchContext