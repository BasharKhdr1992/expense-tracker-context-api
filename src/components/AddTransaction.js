import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);

  const updateTitle = (e) => setTitle(e.target.value);
  const updateAmount = (e) => setAmount(+e.target.value);

  const addNewTransaction = () => {
    if (title !== '' && amount !== 0) {
      const t = {
        title,
        amount,
      };
      addTransaction(t);
    }
  };
  return (
    <div className="add-transaction">
      <h3 className="form-title">Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="transaction-title" className="form-label">
          Title
        </label>
        <input
          placeholder="Enter new title..."
          type={'text'}
          value={title}
          onChange={updateTitle}
          className="form-input"
          name="transaction-title"
          id="transaction-title"
        />
      </div>
      <div className="form-control">
        <label htmlFor="transaction-amount" className="form-label">
          Amount
          <br />
          (Negative - expense, positive - income)
        </label>
        <input
          className="form-input"
          value={amount}
          onChange={updateAmount}
          placeholder="Enter new title..."
          type={'number'}
          name="transaction-amount"
          id="transaction-amount"
        />
      </div>
      <button onClick={addNewTransaction} className="btn btn-primary">
        Add new transaction
      </button>
    </div>
  );
};

export default AddTransaction;
