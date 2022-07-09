import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/layout/navBar';
import Footer from './components/layout/footer';
import Home from './components/home';
import Exercise from './components/exercise';
import { SearchProvider } from "./components/context/search/searchContext";

const App = () => {
    return ( 
      <SearchProvider>
      <Router>
      <div className="flex flex-col justify-between h-screen">
          <NavBar />

          <main className="container mx-auto pb-12">
           <Routes>
               <Route exact path="/" element={<Home />} />    
               <Route path="/exercise" element={<Exercise />} />    
             </Routes> 
                            
             </main>

          <Footer/>
      </div>

     </Router>

     </SearchProvider>

     )
}
 
export default App;