import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './components/layout/navBar';
import Footer from './components/layout/footer';
import Home from './components/pages/home';
import Exercise from './components/pages/exercise';

const App = () => {
    return ( 
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
     )
}
 
export default App;