import Hero from './../layout/hero';
import SearchExercise from './../searchExercise';

const Home = () => {
    return ( 
        <div className="container mx-auto">
        <Hero/>
        <SearchExercise />
        </div>
     );
}
 
export default Home;