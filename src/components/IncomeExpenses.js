import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions
    .filter((t) => t.amount > 0)
    .map((t) => t.amount)
    .reduce((acc, amount) => acc + amount);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .map((t) => t.amount)
    .reduce((acc, amount) => acc + amount, 0);

  return (
    <div className="income-expenses">
      <div className="income">
        <h2>Income</h2>
        <p>{`$+${income.toFixed(2)}`}</p>
      </div>
      <div className="expense">
        <h2>Expense</h2>
        <p>{`$${expenses.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
