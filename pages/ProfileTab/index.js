import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Login from "../Login";
import Profile from "../Profile";

function ProfileTab() {
  const { isLogged } = useContext(UserContext);

  return <>{isLogged === false ? <Login /> : <Profile />}</>;
}

export default ProfileTab;
