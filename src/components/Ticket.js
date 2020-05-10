import React from "react";

function Ticket(props) {
  const { names, location, issue } = props;
  return (
    <div className="ui card">
      <div className="content">
        {/* Text */}
        <div className="header">
          {names}
        </div>
        <div className="meta">
          {location}
        </div>
        <div className="description">
          {issue}
        </div>
        {/* Buttons */}
        <div class="extra content">
          <div class="ui two buttons">
          <div class="ui basic green button">Edit</div>
          <div class="ui basic red button">Close Ticket</div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Ticket;