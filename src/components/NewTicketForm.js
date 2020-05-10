import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(props){

  function handleSubmit(e) {
    e.preventDefault();
    props.createTicket({names: e.target.names.value, location: e.target.location.value, issue: e.target.issue.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
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
  createTicket: PropTypes.func
};

export default NewTicketForm;