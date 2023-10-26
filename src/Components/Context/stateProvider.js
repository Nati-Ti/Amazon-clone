import React, { createContext, useContext, useReducer } from 'react';



export const AmazonContext = createContext();


export const StateProvider = ({ reducer, initialState, children }) => 
(
    <AmazonContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AmazonContext.Provider>
);

export const useStateValue = () => useContext(AmazonContext);