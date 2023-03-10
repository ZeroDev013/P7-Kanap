import React, { useState } from 'react';
import vector from "../assets/images/vector.svg";

import "../styles/dropdown.css";

//function collpase
function Dropdown({ title, equipements, content ,children }) {

    //initialisation etat
    const [open, setOpen] = useState(false);

    //function etat 
    const handleClick = (e) => {
        setOpen(!open)
    }

    //utilisation ternaire pour le switch
    return (
        <div onClick={handleClick} className='dropdown'>
            <div className='dropdown_close'>
                <div className='title'>
                    <h3 className='title_content'>{title}</h3>
                    <h3 className='title_content'>{equipements}</h3>
                </div>
                <div className={open ? 'vector open' : 'vector  closed'}>
                    <img src={vector} alt="vector" className="vector" />
                </div>
            </div>
            <div className={open ? 'dropdown open' : 'dropdown  closed'}>
                <ul className='content'>
                    {children}
                    {content}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown;