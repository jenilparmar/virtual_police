'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Loader from "@/Components/Loader";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [loaderActive, setLoaderActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://virtual-police.vercel.app/api/addLogin", { cache: 'no-store' });
      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  const handleSubmit = () => {
    setLoaderActive(true);
    let flag = true;
    data.forEach(element => {
      if (element.email === email && element.password === password) {
        // alert("Login successful");
        router.push('/home');  // Navigate to /home on successful login
        flag = false;
      }
    });
    if (flag) alert("Please enter a valid email and password!!");
    setLoaderActive(false);
  };

  return (
    loaderActive ? <Loader /> : 
      <div>
        <section className="text-gray-400 bg-gray-900 h-screen body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-white text-lg font-medium title-font mb-5">
                Login
              </h2>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
            

                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-blue-900 rounded border border-gray-600 focus:border-blue-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick={handleSubmit} className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Login
            </button>
            <div className="text-xs mt-3 flex flex-row gap-2">
              Don't have an account? <Link href={'/'}>
              <div className="text-blue-500">Signup</div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default LoginPage;
