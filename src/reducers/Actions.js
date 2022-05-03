import * as Types from './ActionTypes';

export const deleteTransaction = (id, dispatch) => {
  dispatch({
    type: Types.DELETE_TRANSACTION,
    payload: id,
  });
};

export const addTransaction = (t, dispatch) => {
  dispatch({
    type: Types.ADD_TRANSACTION,
    payload: t,
  });
};
