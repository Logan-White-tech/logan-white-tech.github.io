import '../../CSS/general.css';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

import { Outlet, Link } from 'react-router-dom';
function Home() {
  return (
    <div className="page-container">
        <Navigation/>
        <div className='home-contents'>
            <p> Education</p>
            <Link to="/">HomePage</Link>
            
        </div>
        <Footer/>
    </div>
  );
}

export default Home;
