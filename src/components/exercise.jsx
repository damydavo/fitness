import { useState, useEffect, useContext } from 'react';
import { exerciseOptions, FetchData } from "./utils/fetchData";
import SearchContext from "./context/search/searchContext";
import ExerciseCard from './exerciseCard';

const Exercise = () => {
  const { exercises, setExercises, bodyParts } = useContext(SearchContext)

  console.log(exercises)

    return ( 
        <>
        <div className="flex text-3xl font-bold items-center mt-50 p-20">Showing Results</div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
               { exercises.map(exercise => {
                return (
                    <ExerciseCard key={ exercise.id } exercise={exercise}/>
                )
               }) }
        </div>

        </>

     );
}
 
export default Exercise;