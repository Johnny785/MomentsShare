import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIcomponents/Card/Card";

import "./UsersList.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className="center">
        <h2>No User Found.</h2>
      </Card>
    );
  }
  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          ></UserItem>
        );
      })}
    </ul>
  );
};

export default UsersList;
