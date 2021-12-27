import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import HeaderController from '../HeaderController/HeaderController';
import Spinner from '../Spinner/Spinner';
import StocksList from '../StocksList/StocksList';
import { fetchPostsLoading, fetchPostsSuccess } from '../../action/stocksAction';
import { useSelector, useDispatch } from 'react-redux';

export let fetchPostsRequest = null;

function AllStocks() {
    const [socket, setSocket] = useState(null);
    const [isLoaded, setLoad] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [makeIntervalValue, setMakeIntervalValue] = useState(5000);
    const [intervalValue, setIntervalValue] = useState(5000);
    const oneSeconds = 1000;
    const dispatch = useDispatch();
    const listState = useSelector(state => state.coins);

    useEffect(() => {
        setSocket(io('http://localhost:4000'));
    }, [intervalValue])

    useEffect(fetchPostsRequest = () => {
        if (!socket) return;

        socket.on('connect', () => {
            start();
            dispatch(fetchPostsLoading());
        });

        socket.on('ticker', data => {
            dispatch(fetchPostsSuccess(data));

            setLoad(true);
        });

        const start = () => {
            socket.emit('start', intervalValue);
            
        };
    }, [socket]) 

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
                    searchValue={searchValue} 
                    isLoaded={isLoaded}
                    listState={listState}
                />
            </ul>
            <Spinner isLoaded={isLoaded} />
        </div>
    );
};

export default AllStocks;

