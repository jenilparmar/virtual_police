import React from "react";

const Loader = () => {
  return (
<>
<div className="load w-screen h-screen flex flex-col justify-center">
      <figure className="self-center">
        <div style={{ "--i": "1" }}></div>
        <div style={{ "--i": "2" }}></div>
        <div style={{ "--i": "3" }}></div>
        <div style={{ "--i": "4" }}></div>
        <div style={{ "--i": "5" }}></div>
        <div style={{ "--i": "6" }}></div>
        <div style={{ "--i": "7" }}></div>
        <div style={{ "--i": "8" }}></div>
        <div style={{ "--i": "9" }}></div>
        <div style={{ "--i": "10" }}></div>
        <div style={{ "--i": "11" }}></div>
        <div style={{ "--i": "12" }}></div>
      </figure>
      </div>
</>
  );
};

export default Loader;
