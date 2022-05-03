import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className="transaction-list-title">History</h3>
      <ul className="transaction-list">
        {transactions.map((t, index) => {
          return <Transaction key={index} transaction={t} />;
        })}
      </ul>
    </>
  );
};

export default TransactionList;
