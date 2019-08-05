import React, { useState } from 'react';
import "../../App.css";
import "../Nav/Nav"

function Button  ()  {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (

    <button className="toggle-button" onClick={handleToggle}>
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>

    
 )
};

export default Button;