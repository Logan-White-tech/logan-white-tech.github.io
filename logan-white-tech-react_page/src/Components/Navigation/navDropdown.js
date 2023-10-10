import {useState} from 'react';
import '../../CSS/navigation.css';
import '../../CSS/general.css';


function generateContents(contents){
    let elements = contents.map((x) => 
        (<a className='dropdown-item' href={x.link}>{x.name}</a>)
    );
    return elements;
}

function NavDropdown({header = "Default", contents=[{name:"A", link:"path"}]}){
    const [expanded, setExpanded] = useState(false);
    return(
        <div className={'dropdown ' +(expanded ? "active": "") } aria-expanded={expanded}>
            <button onClick={()=>{ setExpanded(!expanded); }} className='dropdown-header'>
                {header}
            </button>
            <div className='dropdown-content'>
                {generateContents(contents)}
            </div>
        </div>
    );
}
export default NavDropdown;
