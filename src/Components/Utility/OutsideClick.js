import {useEffect, useRef} from 'react';

export function OutsideClick(props){
    const reference = useRef(null);
    const {onClickOutside} = props;

    useEffect(() =>{
        const handleOutsideClick = (event) =>{
            if(reference.current && ! reference.current.contains(event.target)){
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleOutsideClick, true);

        return()=> {
            document.removeEventListener('click', handleOutsideClick,true);
        };
    }, [onClickOutside]);

    if(!props.show){
        return null;
    }

    return(
        <div ref={ref} className='info-box'>
            {props.message}
        </div>
    );
}