import React, { useRef, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const ref1 = useRef(null);

  const showDelete = (e) => {
    ref1.current.children[0].className += ' visible';
  };

  const removeDelete = (e) => {
    ref1.current.children[0].className =
      ref1.current.children[0].className.replace(' visible', '');
  };

  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <div
      ref={ref1}
      className="item-container"
      onMouseEnter={showDelete}
      onMouseLeave={removeDelete}
    >
      <button
        type="button"
        className="btn-delete"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
      <li className={`item ${transaction.amount > 0 ? 'plus' : 'minus'}`}>
        <p>{transaction.title}</p>
        <p>{`$${sign}${Math.abs(transaction.amount)}`}</p>
      </li>
    </div>
  );
};

export default Transaction;
