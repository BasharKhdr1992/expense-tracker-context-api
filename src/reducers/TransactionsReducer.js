import * as Types from './ActionTypes';

export const transactionsReducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: state.transactions.length + 1,
            ...action.payload,
          },
        ],
      };
    case Types.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};
