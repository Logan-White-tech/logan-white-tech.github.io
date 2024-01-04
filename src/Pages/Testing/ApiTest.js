
import '../../CSS/general.css';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import './testing';
// import puppeteer from 'puppeteer';


function ApiTest() {
    // const num = "9400136105440701945344";

    async function handleAPI(FormData){
        
    };

    return (

        
        <div className="page-container">
            <Navigation/>

            <div className='home-contents'>
                <p> Still a work in Progress</p>
            </div>

            <form action={handleAPI}>
                <input name='A'/>
                <button type='submit'>
                    Submit input
                </button>
            </form>

            <Footer/>
        </div>
    );
}

export default ApiTest;