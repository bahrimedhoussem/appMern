import React from "react";

const Player = (props) => {

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    margin: "15px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9"
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "10px"
  };

  return (
    <div style={cardStyle}>
      <img src={props.imageUrl} alt={props.name} style={imgStyle} />
      <h3>{props.name}</h3>
      <p><strong>Team:</strong> {props.team}</p>
      <p><strong>Nationality:</strong> {props.nationality}</p>
      <p><strong>Number:</strong> {props.jerseyNumber}</p>
      <p><strong>Age:</strong> {props.age}</p>
    </div>
  );
};

export default Player;
