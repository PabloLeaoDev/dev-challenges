import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      console.log('Success');
      newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      return newState;
    case types.LOGIN_REQUEST:
      console.log('REDUCER', action.payload);
      return state;
    case types.LOGIN_FAILURE:
      newState = { ...initialState };
      return newState;
    default:
      return state;
  }
}
