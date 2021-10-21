import React, { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const user = {};
  const host = "http://localhost:3001";
  const [info, setInfo] = useState(user);
  const getUser = async () => {
    // API Call
    const response = await fetch(`${host}/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setInfo(json);
  };
  return (
    <UserContext.Provider value={{ info, getUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
