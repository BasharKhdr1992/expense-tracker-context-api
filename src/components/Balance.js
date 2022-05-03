import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map((t) => t.amount)
    .reduce((acc, amount) => acc + amount, 0);

  return (
    <div>
      <h2>Your balance</h2>
      <p className="balance">{`${balance.toFixed(2)}`}</p>
    </div>
  );
};

export default Balance;
