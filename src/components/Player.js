import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditSave() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName)
    }
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = (isEditing) ? <input type="text" required value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>;

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditSave}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}