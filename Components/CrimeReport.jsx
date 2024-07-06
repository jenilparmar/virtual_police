
import React from "react";
import Crime from "./Crime";
import axios from "axios";


const CrimeReport = async (res) => {
  const res1 = await axios.get("https://crimereport.vercel.app/api/getallData");

  return (
    <section className="text-gray-400 bg-gray-900 body-font  h-screen overflow-hidden">
      <h1 className="relative top-10 text-xl font-bold text-red-400 text-center">
        Crime Reports
      </h1>
      <div className="h-1 w-10/12 self-center bg-red-400 rounded-sm relative top-12 left-8 "></div>
      <br />
      <br />

      <Crime />
      <Crime />
    </section>
  );
};

export default CrimeReport;
