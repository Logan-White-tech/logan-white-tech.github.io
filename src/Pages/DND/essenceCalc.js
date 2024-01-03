import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

import "./essenceCalc.css";
import Dropdown from '../../Components/Utility/Dropdown';
import TabbedText from '../../Components/Utility/TabbedText';
import Target from './target';
function EssenceCalc() {
    let essences = [
        {
            essenceName:"Sin",
            rank:"bronze",
            awakeningStones:["Apocalypse"],
            description:"Example"
        },
        {
            essenceName:"Darkness",
            rank:"bronze",
            awakeningStones:[],
            description:""
        },
        {
            essenceName:"Blood",
            rank:"bronze",
            awakeningStones:["Decay"],
            description:""
        },
        {
            essenceName:"Doom",
            rank:"bronze",
            awakeningStones:[],
            description:""
        }
    ];
    let essenceDie = 4;
    let numTargets = 1;
    let rollCMD = "/roll "; 
  return (
    <div className="page-container">
        <Navigation/>
        <div className='calc-contents'>
            <h1>Essence Calculator </h1>
            <div className='calc-values'>
                {
                    Array(numTargets).fill(<Target />)
                }
            </div>
            

        </div>
        <div className='essence-abilities'>
            {
                essences.map((x)=>( 
                    <Dropdown header={x["essenceName"]} contents={x["description"]}></Dropdown>
                ))
                // <TabbedText contents={essences}/>
            }
        </div>
        <Footer/>
    </div>
  );
}

export default EssenceCalc;