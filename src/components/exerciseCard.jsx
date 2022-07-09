import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
    return ( 
        <Link to={`/exercise/${exercise.id}`}>
           <div className="w-50 bg-base-100 shadow-xl rounded-md">
            <figure><img src={exercise.gifUrl} alt={ exercise.name } /></figure>
            <div className="card-body">
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
            </div>
        </div>
        </div>
        </Link>
         
     );
}
 
export default ExerciseCard;