import React, { useEffect, useState } from "react";
import bg from "../../assets/bg.jpg";
import RoomItem from "./RoomItem";

const Home = () => {
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, []);
  return (
    <div>
      <div
        className="hero min-h-[calc(100vh-64px)]"
        style={{
          backgroundImage: `url(${bg} )`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="px-52 mt-10 flex justify-between gap-10">
        {hotel.map((hot, index) => (
          <RoomItem key={index} hotel={hot} />
        ))}
      </div>
      ;
    </div>
  );
};

export default Home;
