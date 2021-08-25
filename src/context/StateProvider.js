import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext([{}, () => {}]);

export const StateProvider = ({ reducer, initialState, children }) => (
  <GlobalContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GlobalContext.Provider>
);

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.shape({}).isRequired,
  children: PropTypes.node.isRequired
};

export const useGlobalContext = () => useContext(GlobalContext);
