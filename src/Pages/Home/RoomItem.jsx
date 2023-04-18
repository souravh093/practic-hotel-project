import React from "react";
import { FaBed, FaMoneyCheck, FaPeopleArrows } from 'react-icons/fa';

const RoomItem = ({ hotel }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full h-80 object-cover"
          src={hotel.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{hotel.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="flex justify-evenly">
          <div className="flex justify-center items-center gap-1">
            <FaBed /> {hotel.bed}
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaPeopleArrows /> {hotel.people}
          </div>
          <div className="flex justify-center items-center gap-1">
            <FaMoneyCheck /> {hotel.price}
          </div>
          <div>
            <button className="btn btn-primary">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomItem;
