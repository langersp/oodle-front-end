import { BEER_SELECTED_ACTION_ADD, BEER_SELECTED_ACTION_CLEAR } from "./actions";

const beerReducer = (state, action) => {
  switch (action.type) {
    case BEER_SELECTED_ACTION_CLEAR:
      return null;
    case BEER_SELECTED_ACTION_ADD:
      return { ...state, ...action.beerSelected };

    default:
      return state;
  }
};

export default beerReducer;
