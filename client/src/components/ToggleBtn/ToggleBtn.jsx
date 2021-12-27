import sunSvg from '../../assets/svg/sun-svgrepo-com.svg';
import moonSvg from '../../assets/svg/crescent-moon-svgrepo-com.svg';
import React, { useState, useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext';

const ToggleBtn = () => {
    const [active, setActive] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        active ? setActive(false) : setActive(true);

        if (darkMode) {
            theme.dispatch({ type: 'LIGHTMODE' });
        } else {
            theme.dispatch({ type: 'DARKMODE' });
        };
    };

    return (
        <button 
            className={`${active ? 'active' : ''} toggleBtn`} 
            onClick={handleClick}
        >
            <img src={moonSvg} alt='moon-svg'/>
            <img src={sunSvg} alt='sun-svg'/>
            <div className='toggleBtn__toggler'></div>
        </button>
    )
};

export default ToggleBtn;