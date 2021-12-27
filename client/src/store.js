import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stockReducer from './reducer/stocksReducer';

const store = createStore(stockReducer, applyMiddleware(thunk));

export default store;