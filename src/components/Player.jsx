import { useState } from "react";

const Player = ({ playerName, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};

export default Player;
