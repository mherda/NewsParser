import React from 'react';
import './Button.css';

const Button = (props) => {

    const buttonType = props.type ? props.type : "button";
    const currentMode = props.myMode.headlinesMode ? props.myMode.name[1] : props.myMode.name[0]; 
    const name = props.name ? props.name : currentMode;
    return (
      <button
        type={buttonType}
        className="button-inline"
        onClick={props.handleChange}
      >
        Switch to {name}
      </button>
    );
};

export default Button;