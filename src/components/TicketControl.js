import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false, 
      masterTicketList: [
        {
          names: 'Imani & Jacob',
          location: '9F',
          issue: 'Child component isn\'t rendering.',
          id: 3
        }
      ],
      selectedTicket: null
    };
  }

  addTicketToList = (newTicket) => {
    this.setState({ 
      masterTicketList: [...this.state.masterTicketList, newTicket], formVisible: false
    })
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render(){
    const { masterTicketList, formVisible } = this.state;
    let userView = null;
    let buttonText;

    if (formVisible) {
      userView = 
        <NewTicketForm createTicket={this.addTicketToList}  />;
        buttonText = "Return to Ticket List";
    } else {
        userView = 
        <TicketList ticketList={masterTicketList} />;
        buttonText = "Add Ticket"; 
    }

    return (
      <React.Fragment>
        {userView}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl