import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: true, 
      masterTicketList: [
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
        <button className="ui button basic blue small" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl