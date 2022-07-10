import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
    return ( 
        <>
        <Link to={`/exercise/${exercise.id}`}>
           <div className="w-50 bg-base-100 shadow-xl rounded-md">
            <figure><img src={exercise.gifUrl} alt={ exercise.name } /></figure>
            <div className="card-body">
            <div className="card-actions justify-end">
            <div className="badge badge-outline">{ exercise.bodyPart }</div> 
            <div className="badge badge-default">{ exercise.target }</div>
            </div>

        </div>
        <p className="text-center pb-4 font-semibold">{exercise.name}</p>

        </div>
        </Link>
        
        </>
     );
}
 
export default ExerciseCard;