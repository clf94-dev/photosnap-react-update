import React from 'react'
import './styles/button.css'
import {NavLink} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--read', 'btn--read--light'];
const SIZES = ['btn--medium', 'btn-large', 'btn--wide'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, link}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize
        ? buttonSize
        : SIZES[0]);

    return (
        <React.Fragment>
        {link ? 
        <NavLink to={link}>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </NavLink>:
        <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button> }
        </React.Fragment>

    );
}