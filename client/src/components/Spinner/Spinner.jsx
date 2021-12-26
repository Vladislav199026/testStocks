import React from 'react';
import PropTypes from 'prop-types';

function Spinner({isLoaded}) {
    return (
        <div className={isLoaded ? 'hidden' : 'lds-dual-ring'}></div>
    )
};

Spinner.propTypes = {
    isLoaded: PropTypes.bool
};

export default Spinner;