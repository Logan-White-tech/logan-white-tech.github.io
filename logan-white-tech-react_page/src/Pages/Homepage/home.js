
import '../../CSS/general.css';
import '../../CSS/home.css';

import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
function Home() {
  return (
    <div className="page-container">
        <Navigation/>
        <div className='home-contents'>
            <p> Still a work in Progress</p>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;
