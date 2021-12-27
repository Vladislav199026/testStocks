import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
