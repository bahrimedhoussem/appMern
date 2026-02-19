import React from "react";
import players from "../players";
import Player from "./Player";

const PlayerList = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    }}>
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlayerList;