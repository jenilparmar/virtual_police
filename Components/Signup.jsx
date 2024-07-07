'use client'
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
const Signup = () => {
  const router = useRouter();
const [name , setName] = useState("");
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [age , setAge] = useState("");
const [role , setRole] = useState("");

  const  hanndleSubmit= async ()=>{
    const formData = {
      name : name,
      age:age,
      role : role,
      email:email,
      password:password
    }
   const res = await axios({
      url:"https://virtual-police.vercel.app/api/addLogin",
      method:"POST",
      data:formData
    })
    if(res.ok){
      router.push('home')
    }
    setName("");
    setEmail("");
    setAge("")
    setPassword("")
    setRole('')
    console.log(res);


  }
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              onChange={(e)=>{
                setName(e.target.value);
              }}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="relative w-1/2">
              <label htmlFor="age" className="leading-7 text-sm text-gray-400">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                onChange={(e)=>{
                  setAge(e.target.value);
                }}
                className="w-full h-10 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative h-10 w-1/2">
              <label htmlFor="role" className="leading-7 text-sm text-gray-400">
                Role
              </label>
              <select
                id="role"
                name="role"
                onChange={(e)=>{
                  setRole(e.target.value);
                }}
                className="w-full h-10 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              >
                <option value="citizen">Citizen</option>
                <option value="policeman">Policeman</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e)=>{
                setEmail(e.target.value);
              }}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-400">
            Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e)=>{
                setPassword(e.target.value);
              }}
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-900 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button onClick={hanndleSubmit} className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
            Sign Up
          </button>
          <div className="text-xs mt-3 flex flex-row gap-2">Already have an account? 
            <Link href={'/Login'}>
            <div className="cursor-pointer text-red-500">
              Login
            </div></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
