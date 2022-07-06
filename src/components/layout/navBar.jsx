import logo from './assets/images/Logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="container flex mx-auto">

          <div className="flex mx-2 px-2 pt-4 items-center">
            <Link to ='/'>
            <img src={ logo } alt="" />
            </Link>
           
           <div className="mx-14 space-x-14">
             <Link to ='/'>
              Home
             </Link>

             <Link to ='/exercise'>
              Exercise
             </Link>
           </div>
           </div>

        </nav>
     );
}
 
export default NavBar;