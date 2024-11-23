const initialState = {
  clickedButton: false
};

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case 'CLICKED_BUTTON':
      newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    default:
      return state;
  }
}
