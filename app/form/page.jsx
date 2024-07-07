'use client'

import React, { useState ,useEffect} from "react";
import axios from 'axios';
import Loader from "@/Components/Loader";

function Page() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  
 const [typeOfCrime , setTypeOfCrime] = useState("")
 const [date,setDate] = useState(Date)
 const [name , setName] = useState("");
 const [mobileNumber , setMobileNumber] = useState("");
 const [discription , setDiscription] = useState("");
 const [loaderActive, setLoaderActive] = useState(false);

 const handleSubmit=()=>{
  setLoaderActive(true)
  const formdata = {
    crime:typeOfCrime,
    date:date,
    name:name,
    mobileNumber:mobileNumber,
    discription:discription,
    latitude: latitude,
    longitude: longitude
  }

  axios({
    url:"https://virtual-police.vercel.app/api/postCrimeReport",
    method:"POST",
    data:formdata
  })
  .then(res=>{
    setLoaderActive(false)
    console.log(res);
    alert("Crime reported Successfully")
    setDate("");
    setDiscription("")
    setMobileNumber("")
    setName("")
    setTypeOfCrime("")
  })
  .catch(e=>{
    console.log(e);
  })

 }
 useEffect(() => {
  if (window!='undefined' && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }, error => {
      console.error("Error accessing geolocation: ", error);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}, []);
  return (
   
      loaderActive?<Loader/>: <div className="w-screen h-screen bg-gray-900 flex flex-col">
      <h1 className="self-center text-2xl font-bold text-blue-400 mt-4">
        Crime Report
      </h1>
      <label htmlFor="typeofCrime" className="px-8 mt-4">
        Type of Crime
      </label>
      <select
        id="typeofCrime"
        name="role"
        onChange={(e)=>{
         setTypeOfCrime(e.target.value)
        }}
        className="w-10/12 self-center h-10 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      >
        <option value="Assault">Assault</option>
        <option value="Burglary">Burglary</option>
        <option value="Robbery">Robbery</option>
        <option value="Vandalism">Vandalism</option>
        <option value="Fraud">Fraud</option>
        <option value="Drug-related">Drug-related</option>
        <option value="Domestic Violence">Domestic Violence</option>
        <option value="Cybercrime">Cybercrime</option>
        <option value="Homicide">Homicide</option>
        <option value="Theft">Theft</option>
        <option value="Arson">Arson</option>
        <option value="Other">Other</option>
      </select>
      <label htmlFor="dateFound" className="px-8 mt-2">
        Date & Time Found:
      </label>
      <input
        type="datetime-local"
        id="dateFound"
        name="dateFound"
        onChange={(e)=>{
          setDate(e.target.value)
         }}
        placeholder="Date-time"
        className="w-10/12 placeholder:text-white self-center h-10 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        requiblue
      />
      <h1 className="self-center text-2xl font-bold text-blue-400 mt-4">
        Your Information
      </h1>
      <input
        type="name"
        name="name"
        onChange={(e)=>{
          setName(e.target.value)
         }}
        className="mt-2 w-10/12 placeholder:text-white self-center h-10 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Your Name (Optional)"
        id=""
      />
      <input
        type="tel"
        name="phone"
        onChange={(e)=>{
          setMobileNumber(e.target.value)
         }}
        className="mt-2 w-10/12 placeholder:text-white self-center h-10 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Your Phone Number (Optional)"
        id=""
      />
      <textarea
        id="description"
        name="description"
        rows="4"
        onChange={(e)=>{
          setDiscription(e.target.value)
         }}
        className="mt-2 w-10/12 placeholder:text-white self-center bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Describe the crime here..."
      ></textarea>
      <label htmlFor="photo" className="px-8 mt-2">
        Upload Photo:
      </label>
      <input
        type="file"
        id="photo"
        name="photo"
        className="mt-2 w-10/12 self-center h-12 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <button className="p-3 mt-4 bg-blue-400 rounded-md w-4/12 font-bold self-center" onClick={()=>{
        handleSubmit();
      }}>
        Submit
      </button>
    </div>
  );
}

export default Page;
