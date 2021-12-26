import React from 'react';
import ToggleBtn from '../ToggleBtn/ToggleBtn';
import PropTypes from 'prop-types';

function HeaderController({changeSearchValue, changeInterval, applyInterval}) {

    return (
        <div className='header'>
            <div className='header__controller'>
                <input 
                    type='text' 
                    placeholder='search...' 
                    onChange={ changeSearchValue }
                />
                <input 
                    type='number' 
                    placeholder='how often to update stocks?' 
                    onChange={ changeInterval }
                    title='time in seconds'
                />
                <input 
                    type='button' 
                    value='accept'
                    onClick={ applyInterval }
                />
            </div>
            <div className='header__theme'>
                <ToggleBtn />
            </div>
        </div>
    )
};

HeaderController.propTypes = {
    changeSearchValue: PropTypes.func,
    changeInterval: PropTypes.func,
    applyInterval: PropTypes.func
};

export default HeaderController;