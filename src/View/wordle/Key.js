import React, { useContext } from "react";
import { AppContext } from "../FrontView/Wordle";

function Key({ keyValue, largeKey, disabled }) {
  const { onEnter, onDelete, onSelectLetter, gameOver } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) 
      return;
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };
  return (
    <div className="key" id={largeKey ? "large" : disabled && "disabled"} onClick={selectLetter} >
      {keyValue}
    </div>
  );
}

export default Key;
