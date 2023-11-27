
import '../../CSS/general.css';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import './testing';


function ApiTest() {
    const num = "9400136105440701945344";

    async function handleAPI(FormData){
        // const url = "https://www.google.com/search?q=merchant+of+venice&gl=us&tbm=bks";
        // browser = await puppeteer.launch({
        //     headless: false,
        //     args: ["--disabled-setuid-sandbox", "--no-sandbox"],
        // });
        // const page = await browser.newPage();
        // await page.setExtraHTTPHeaders({
        //     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36 Agency/97.8.6287.88",
        // });
        // await page.goto(url, {
        //     waitUntil: "domcontentloaded"
        // });
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