import { useState, useEffect, useContext } from 'react';
import { exerciseOptions, FetchData } from "./utils/fetchData";
import SearchContext from "./context/search/searchContext";
import ExerciseCard from './exerciseCard';
import Pagination from './pagination';

const Exercise = () => {
  const {exercises, currentExercises, ExercisesPerPage, paginate } = useContext(SearchContext)
    return ( 
        <>
        <div className="flex text-3xl font-bold items-center mt-50 p-20">Showing Results</div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
               { currentExercises.map(exercise => {
                return (
                    <ExerciseCard key={ exercise.id } exercise={exercise}/>
                )
               }) }
        </div>

        <div className="mt-10">
         <Pagination 
         defaultPage ={1}
         exercisePerPage={ExercisesPerPage} 
         totalExercise={exercises.length} 
         paginate={paginate}/>
         </div>
        </>

     );
}
 
export default Exercise;