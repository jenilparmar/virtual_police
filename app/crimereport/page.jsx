'use client'
import React, { useEffect, useState } from "react";
import Crime from "@/Components/Crime";
import axios from "axios";
import Loader from "@/Components/Loader";

function Page() {
  const [crime, setCrime] = useState([]);
  const [loaderActive , setLoaderActive] = useState(true)

  useEffect(() => {

    axios.get("https://virtual-police.vercel.app/api/getallData")
  
      .then(res => {
        const data = res.data;
        setLoaderActive(false)
        setCrime(data);
        // console.log(crime); // Log the data directly received from the API
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    loaderActive?<Loader/>:<section className="text-gray-400 bg-gray-900 body-font h-screen overflow-hidden">
      <h1 className="relative top-10 text-xl font-bold text-blue-400 text-center">
        Crime Reports
      </h1>
      <div className="h-1 w-10/12 self-center bg-blue-400 rounded-sm relative top-12 left-8"></div>
      <br />
      <br />
     {crime.map((crm, idx) => (
        <Crime
          key={idx}
          crime={crm.crime}
          date={crm.date}
          name={crm.name}
          mobileNumber={crm.mobileNumber}
          description={crm.description}
          coordinates={{ lat: crm.latitude, long: crm.longitude }}
        />
      ))}
    </section>
  );
}

export default Page;
