import React, { createContext, useReducer } from 'react';
import { transactionsReducer } from '../reducers/TransactionsReducer';
import * as actions from '../reducers/Actions';
const initialstate = {
  transactions: [
    { id: 1, title: 'Flower', amount: -20 },
    { id: 2, title: 'Salary', amount: 300 },
    { id: 3, title: 'Book', amount: -10 },
    { id: 4, title: 'Camera', amount: 150 },
  ],
};

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(transactionsReducer, initialstate);

  const addTransaction = (t) => actions.addTransaction(t, dispatch);
  const deleteTransaction = (id) => actions.deleteTransaction(id, dispatch);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
