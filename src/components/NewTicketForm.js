import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <div><label>Names:         
          <input
          type='text'
          name='names'
          placeholder='Pair Names' 
          defaultValue='Jack and Jill'/>
          </label>
        </div>
        <div><label>Location: 
        <input
          type='text'
          name='location'
          placeholder='Location'
          defaultValue='Up a hill' />
          </label>
        </div>
        <div><label>Issue: <br />
        <textarea
          name='issue'
          placeholder='Describe your issue.' 
          defaultValue='Please help!' />
        </label>
        </div>
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;