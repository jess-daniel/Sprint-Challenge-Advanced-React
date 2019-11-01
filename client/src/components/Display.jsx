import React from "react";

const Display = props => {
  return (
    <div>
      {props.data.map(athlete => (
        <div key={athlete.id}>
          <h2>{athlete.name}</h2>
          <p>{athlete.country}</p>
          <p>
            <em>{athlete.id}</em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Display;
