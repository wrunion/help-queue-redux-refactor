export default (state={}, action) => {
  const { names, location, issue, id } = action;
  switch(action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          names, location, issue, id
        }
      });
      default:
        return state;
  }
}