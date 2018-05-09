
// Dates Reducer

const datesReducerDefaultState = [];

export default (state = datesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DATE':
      return [
        ...state,
        action.date
      ];
    case 'REMOVE_DATE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
