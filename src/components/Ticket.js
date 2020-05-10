import React from "react";

function Ticket(props) {
  const { names, location, issue } = props;
  return (
    <div className="Ticket ui card">
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
        <div className="extra content margin-1">
          <div className="ui two buttons">
            <div className="ui basic green button">Edit</div>
            <div className="ui basic red button">Close Ticket</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;