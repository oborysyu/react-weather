import { useState } from "react";

export function AddCityComponent({ addCity }) {
  const [enteredCityName, setEnteredCityName] = useState("");

  function handleClick() {
    if (enteredCityName.trim() !== "") {
      addCity(enteredCityName);
      setEnteredCityName("");
    }
  }

  return (
    <div className="addCity">
      <input
        onChange={(e) => setEnteredCityName(e.target.value)}
        value={enteredCityName}
      ></input>
      <button onClick={handleClick}>Add City</button>
    </div>
  );
}
