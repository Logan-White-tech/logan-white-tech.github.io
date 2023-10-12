
import '../../CSS/general.css';
import '../../CSS/home.css';
import Dropdown from '../../Components/Utility/Dropdown';

import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
function Home() {
  return (
    <div className="page-container">
        <Navigation/>
        <div className='home-contents'>
            <p> Still a work in Progress</p>

            <div>
              <Dropdown header={'Example'} contents={[{name:"X", link:"X"}, {name:"Y", link:"Y"}, {name:"Z", link:"Z"}]}/>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;
