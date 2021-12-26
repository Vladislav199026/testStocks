import React from 'react';
import PropTypes from 'prop-types';

function StocksList({isLoaded, dat, searchValue}) {
    return (
        <>
            {isLoaded && dat.filter(value => {
                if (searchValue == '') {
                    return value;
                } else if (value.ticker.toLowerCase().includes(searchValue.toLowerCase())) {
                    return value;
                };
            }).map((item, index) => {
                return (
                    <li key={index}>
                        <ul className='tickerList__inner'>
                            <li>
                                <p>ticker: <strong>{item.ticker}</strong></p>
                            </li>
                            <li>
                                <p>value: <strong>${item.price}</strong></p>
                            </li>
                            <li>
                                {(item['change_percent'] < 0.5) ? (
                                    <p className='markRed'>percent: <strong>%{item['change_percent']}</strong></p>
                                ) : (
                                    <p className='markGreen'>percent: <strong>%{item['change_percent']}</strong></p>
                                )}
                            </li>
                            <li>
                                <p>divident: <strong>{item.dividend}</strong></p>
                            </li>
                            <li>
                                <p>ield: <strong>{item.yield}</strong></p>
                            </li>
                        </ul>
                    </li>
                )
            })}
        </>
    )
};

StocksList.propTypes = {
    isLoaded: PropTypes.bool,
    dat: PropTypes.array,
    searchValue: PropTypes.string
};

export default StocksList;

