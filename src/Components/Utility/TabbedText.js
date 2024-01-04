import { useState } from "react";
import "../../CSS/general.css"

function TabbedText(props){
    const [descript, setDescript] = useState(props.contents[0].description)
    const [current, setCurrent] = useState(props.contents[0].name)
    function switchContents(selected){
        setDescript(selected.description);
        setCurrent(selected.name);
    }
    return(
        
        <div className="tabbed-text-container">
            <div className="tabbed-text-header">
                {
                    props["contents"].map((x)=>(
                        <button id={x.name} className={ (x.name === current ? "active": "")} onClick={()=>switchContents(x)}>{x.name}</button>
                    ))
                }
            </div>
            <div className="tabbed-text-content">
                <div>{descript}</div>
            </div>
        </div>
    );
}
export default TabbedText;