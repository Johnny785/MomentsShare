import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Johnny",
      image: "https://www.pexels.com/photo/waterfalls-during-sunset-954929/",
      places: 5,
    },
  ];
  return <UsersList items={USERS}></UsersList>;
};

export default Users;
