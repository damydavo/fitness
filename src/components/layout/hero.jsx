import banner from './assets/images/banner.png'

const Hero = () => {
    return ( 
        <div className="flex-col md:flex-row gap-40">
        <div className="flex flex-col mt-40 relative">
        <h2 className="text-brightRed font-bold py-6 text-2xl">Fitness Club</h2>
        <div className="space-y-4 font-bold">
            <h1 className="text-3xl">Sweet, Smile</h1>
            <h1 className="text-3xl">And Repeat</h1>
            <p className="text-slate-500">Check out the recent fitness that you will love the most. We got you covered</p>

            <div className="py-6">
            <a href="/#" className="px-6 px-6 pt-2 p-3 text-white bg-brightRed rounded-lg hover:bg-brightRed">Explore Exercise</a>

            </div>
    </div>


        </div>

        <img className="hidden md:block hero-image" src={ banner } alt="" />

        </div>
     );
}
 
export default Hero;