// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SET_ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [], // despesas deverão ser salvas aqui
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
