import React, { useContext } from 'react';

import Sun from '../../images/sun.png';
import Moon from '../../images/moon.png';
import './Toggle.css';
import { ThemeContext } from '../../Context';

const Toggle = () => {
    
    const theme = useContext(ThemeContext);
    
    const handleToggle = () => {
        theme.dispatch({type: 'TOGGLE'})
    };

    return (
        <div className='t'>
            <img src={Sun} alt="" className="t-icon"/>
            <img src={Moon} alt="" className="t-icon"/>
            <div className="t-button" onClick={handleToggle} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}

export default Toggle
