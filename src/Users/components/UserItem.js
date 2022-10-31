import React from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";
import Avatar from "../../shared/components/UIcomponents/Avatar/Avatar";
import Card from "../../shared/components/UIcomponents/Card/Card";
const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item-content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar
              image="https://www.pexels.com/photo/waterfalls-during-sunset-954929/"
              alt=""
            ></Avatar>
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
