import Hero from './layout/hero';
import SearchExercise from './searchExercise';
import Exercise from './exercise';

const Home = () => {
    return ( 
        <div className="container mx-auto">
        <Hero/>
        <SearchExercise />
        <Exercise />
        
        </div>
     );
}
 
export default Home;