import ticketListReducer from '../reducers/ticketListReducer';

describe('ticketListReducer', () => {

  let action;
  const ticketData = {
    names: 'Bill and Ted',
    location: '4b',
    issue: 'Pls halp',
    id: 1
  };

  test(`Should add new ticket to masterTicketList`, () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      names, location, issue, id
    };

    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names, location, issue, id}
    });
  });



  test(`Should return default state if no action type is specified`, () => {
    expect(ticketListReducer({}, { type: null})).toEqual({});
  });
});