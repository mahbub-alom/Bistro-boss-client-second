import React from "react";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { users } = useAuth();
  return (
    <div>
      <span>Hi, Welcome </span>
      <span>{users.displayName}</span>
    </div>
  );
};

export default UserHome;
