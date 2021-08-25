import beerReducer from './beerReducer';

const globalReducer = (
  { beer },
  action
) => {
  return {
    beerSelected: beerReducer(beer, action),
  };
};

export default globalReducer;
