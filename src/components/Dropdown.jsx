import React, { useState } from 'react';
import VECTOR from "../assets/images/Vector.svg";

import "../styles/dropdown.css";

//function collpase
function Dropdown({ title, content }) {

    //initialisation etat
    const [open, setOpen] = useState(false);

    //function etat 
    const handleClick = (e) => {
        setOpen(!open)
    }

    //utilisation ternaire pour le switch
    return (
        <div onClick={handleClick} className='dropdownContainer'>
            <div className='dropdownContainer_close'>
                <div className='title'>
                    <h3>{title}</h3>
                </div>
                <div className={open ? 'vector open' : 'vector  closed'}>
                    <img src={VECTOR} alt="vector" className="vector" />
                </div>
            </div>
            <div className={open ? 'dropdowncontent open' : 'dropdowncontent  closed'}>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Dropdown;