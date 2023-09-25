import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");

  const { setUserName } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(newUsername);
        }}
      >
        Change Username
      </button>
    </div>
  );
};
