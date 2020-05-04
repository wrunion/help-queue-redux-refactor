import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true, 
      masterTicketList: [
        {
          names: 'Thato and Haley',
          location: '3A',
          issue: 'Firebase won\'t save record. Halp.'
        },
        {
          names: 'Sleater and Kinney',
          location: '4B',
          issue: 'Prop types are throwing an error.'
        },
        {
          names: 'Imani & Jacob',
          location: '9F',
          issue: 'Child component isn\'t rendering.'
        }
      ]
    };
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList,
                  formVisibleOnPage: false });
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}  />;
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} />;
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default TicketControl