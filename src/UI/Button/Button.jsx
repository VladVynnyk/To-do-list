import React from 'react';
import classes from './Button.module.css'
const Button = (props) => {
    return (
        <button {...props}>
            {props.text}
        </button>
    );
};

export default Button;