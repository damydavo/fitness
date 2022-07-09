import { useState, useEffect, useContext } from "react"
import { exerciseOptions, FetchData } from "./utils/fetchData"
import HorizontalScrollBar from "./horizontalScrollBar"
import SearchContext from "./context/search/searchContext"


const SearchExercise = () => {
    const [ text, setText ] = useState('')
    const { bodyParts, setBodyParts, setExercises } = useContext(SearchContext)


    useEffect(() => {
      const fetchCategoryExercise = async () => {
        const bodyPartsData = await FetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

        setBodyParts(['all', ...bodyPartsData])

      }

      fetchCategoryExercise()

    }, [])

   const handleChange = (e) => {
       setText(e.target.value)
    }

 const handleSubmit = async (e) => {
  e.preventDefault()
    
      const exerciseData =  text && await FetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      const searchedData = exerciseData.filter(exercise => {
        return (
          exercise.name.toLowerCase().includes(text)||
          exercise.equipment.toLowerCase().includes(text)||
          exercise.bodyPart.toLowerCase().includes(text)||
          exercise.target.toLowerCase().includes(text)
        )
      })

     
   setText('')
   setExercises(searchedData)

 }

    return ( 
        <>
        <div className="flex mx-auto text-center max-w-md pt-6 md:pt-96">
            <h2 className="text-3xl font-bold">We can help with all your fitness work</h2>
        </div>

<form onSubmit={handleSubmit}>
<div className="form-control py-20">
        <div className="input-group flex justify-center">
          <input type="text" 
          value = {text}
          placeholder="Search…" 
          onChange={ handleChange }
          className="input input-bordered w-full"/>
          <button className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
        
      </div>   
</form>

         <HorizontalScrollBar data = {bodyParts} />
        </>
     );
}
 
export default SearchExercise;