import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import HeaderController from '../HeaderController/HeaderController';
import Spinner from '../Spinner/Spinner';
import StocksList from '../StocksList/StocksList';

function AllStocks() {
    const [socket, setSocket] = useState(null);
    const [dat, setDat] = useState([]);
    const [isLoaded, setLoad] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [makeIntervalValue, setMakeIntervalValue] = useState(5000);
    const [intervalValue, setIntervalValue] = useState(5000);
    const oneSeconds = 1000;
    
    useEffect(() => {
        setSocket(io('http://localhost:4000'));
    }, [intervalValue]);
    
    useEffect(() => {
        if (!socket) return;
    
        socket.on('connect', () => {
            start();
        });

        socket.on('ticker', data => {
            setDat(data);
            setLoad(true);
        });
    }, [socket]);

    const start = () => {
        socket.emit('start', intervalValue);
    };

    const deactivateStart = () => {
        socket.disconnect();
    };

    const changeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const changeInterval = (e) => {
        setMakeIntervalValue(+e.target.value);
    };

    const applyInterval = () => {
        setIntervalValue(makeIntervalValue * oneSeconds);
        deactivateStart();
    };
    
    return (
        <div className='main'>
            <HeaderController
                applyInterval={applyInterval}
                changeInterval={changeInterval}
                changeSearchValue={changeSearchValue}
            />
            <h1>stock information:</h1>
            <ul className={isLoaded ? 'tickerList' : 'hidden'}>
                <StocksList 
                    dat={dat} 
                    searchValue={searchValue} 
                    isLoaded={isLoaded}
                />
            </ul>
            <Spinner isLoaded={isLoaded} />
        </div>
    );
};

export default AllStocks;

