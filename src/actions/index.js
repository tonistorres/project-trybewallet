export const SET_ADD_EMAIL = 'SET_ADD_EMAIL';
export const SET_ADD_EXPENSE = 'SET_ADD_EXPENSE';

export const setAddEmail = (payload) => (
  {
    type: SET_ADD_EMAIL, payload,
  }
);

export const setExpense = (payload) => (
  {
    type: SET_ADD_EXPENSE, payload,
  }
);
