import React, { useContext } from 'react';
import './assets/scss/main.scss';
import AllStocks from './components/AllStocks/AllStocks';
import { ThemeContext } from './components/ThemeContext/ThemeContext';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id='wrapper' className={`${darkMode ? 'darktheme' : ''}`}>
      <AllStocks />
    </div>
  );
};

export default App;
