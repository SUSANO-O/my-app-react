import React from 'react';
import "../../App.css";


const Button = props => (
    <button className="toggle-button" {...props} >
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
        <div className="toggle-button__line" />
    </button>
);

export default Button;