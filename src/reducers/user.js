import { SET_ADD_EMAIL } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_ADD_EMAIL:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default reducerUser;
