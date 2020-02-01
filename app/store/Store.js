import React, {createContext, useReducer} from 'react';

// Reducers
import phoneNumberReducer from '../reducers/phoneNumberReducer';

// create inital payload
const phoneNumbers = ['905555555555', '905535555555'];

// create Context
export const MainContext = createContext(phoneNumbers);

// create Store

function Store({children}) {
  const [state, dispatch] = useReducer(phoneNumberReducer, phoneNumbers);
  const value = {state, dispatch};
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export default Store;
