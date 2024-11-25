import * as types from '../types';

const initialState = {
  clickedButton: false
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS:
      console.log('Success');
      newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    case types.CLICKED_BUTTON_REQUEST:
      console.log('Request in progress');
      return state;
    case types.CLICKED_BUTTON_FAILURE:
      console.log('An error occurred');
      return state;
    default:
      return state;
  }
}
