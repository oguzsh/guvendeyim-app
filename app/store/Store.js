import React, {createContext, useReducer} from 'react';

// Reducers
import phoneNumberReducer from '../reducers/phoneNumberReducer';

// create inital payload
const initialState = [
  '905555555555',
  '905535451232',
  '905535879547',
  '905535825487',
  '905539468785',
];

// create Context
export const MainContext = createContext(initialState);

// create Store

function Store({children}) {
  const [state, dispatch] = useReducer(phoneNumberReducer, initialState);
  const value = {state, dispatch};
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default Store;
