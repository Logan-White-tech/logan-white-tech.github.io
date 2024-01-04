import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

import "./essenceCalc.css";
import TabbedText from '../../Components/Utility/TabbedText';
import Target from './target';
import essences from "../DND/essencesDetails";
import { useState } from 'react';
function EssenceCalc() {
    const [numTargets, setNumTargets] = useState(1);
  return (
    <div className="page-container">
        <Navigation/>
        <div className='calc-contents'>
            <h1>Essence Calculator </h1>
            <button onClick={()=>(setNumTargets(numTargets+1))}>Add new target</button>
            <div className='calc-values'>
                {
                    Array(numTargets).fill(<Target />)
                }
            </div>      
        </div>
        <div className='essence-abilities'>            
            <TabbedText contents={essences}/>
        </div>
        <Footer/>
    </div>
  );
}

export default EssenceCalc;