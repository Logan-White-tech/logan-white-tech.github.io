import {useEffect, useState, useRef} from 'react';
import '../../CSS/navigation.css';
import '../../CSS/general.css';

const useOutsideClick = (callback) => {
    const ref =useRef();
  
    useEffect(() => {
      const handleClick = (event) => {
        if(ref.current && !ref.current.contains(event.target)){
            callback();
        }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);
  
    return ref;
  };
  
function generateContents(contents){
    let elements = contents.map((x) => 
        (<a className='dropdown-item' href={x.link}>{x.name}</a>)
    );
    return elements;
}

function NavDropdown({header = "Default", contents=[{name:"A", link:"path"}]}){
    const [expanded, setExpanded] = useState(false);

    const handleOustideClick = () =>{
        setExpanded(false);
    };
    const ref = useOutsideClick(handleOustideClick);
    return(
        <button ref={ref} onClick={()=>{ setExpanded(!expanded); }} className={'dropdown ' +(expanded ? "active": "") } aria-expanded={expanded}> 
            <div className='dropdown-header'>
                {header}
            </div>
            <div className='dropdown-content'>
                {generateContents(contents)}
            </div>
        </button>
    );
}
export default NavDropdown;
