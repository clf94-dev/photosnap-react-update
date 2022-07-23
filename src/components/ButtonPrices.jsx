import React from 'react'
import './styles/buttonPrices.css'
import {NavLink} from 'react-router-dom';

const STYLES = ['btnP--primary', 'btnP--outline'];
const SIZES = ['btnP--medium', 'btnP--large', 'btnP--wide'];

export const ButtonPrices = ({children, type, onClick, buttonStyle, buttonSize, link}) => {
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
                className={`btnP ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>
        </NavLink>: 
        <button
                className={`btnP ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
                {children}
            </button>}
    </React.Fragment>
    );
}