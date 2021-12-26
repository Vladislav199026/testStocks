import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const initialState = {
  darkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHTMODE':
      return { darkMode: false };
    case 'DARKMODE':
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider({children}) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider 
      value={{ state, dispatch }}
    >
      {children}
    </ThemeContext.Provider>
  )
};

ThemeProvider.propTypes = {
  children: PropTypes.any
};