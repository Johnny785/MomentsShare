import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "pl",
    title: "Empire State Building",
    description: "tallest building in the US",
    imageURL:
      "https://www.dreamstime.com/empire-state-building-new-york-skyline-empire-state-building-new-york-skyline-surise-sunset-image168613595",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "pl",
    title: "Empire State Building Alias",
    description: "Second tallest building in the US",
    imageURL:
      "https://www.dreamstime.com/empire-state-building-new-york-skyline-empire-state-building-new-york-skyline-surise-sunset-image168613595",
    address: "20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2",
  },
];

const UserMoments = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces}></PlaceList>;
};

export default UserMoments;
