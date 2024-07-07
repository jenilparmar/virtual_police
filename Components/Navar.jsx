'use client'
import React from "react";
import { IoHome } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiOutlineForm } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navar() {
  const path = usePathname();

  let flag = path !== '/' && path !== "/Login";


  return (
    <>
      {flag && (
        <div className="nav z-10  text-blue-400 text-2xl flex flex-row justify-evenly bottom-2 left-4 align-middle bg-gray-800 w-11/12 rounded-md h-12 self-center">
          <Link className="self-center" href={"/home"}>
            <div className="flex flex-col justify-center self-center text-xl">
              <IoHome className="self-center" />
              <p className="text-sm text-center self-center text-wrap">Home</p>
            </div>
          </Link>
          <Link className="self-center" href={"/form"}>
            <div className="flex flex-col justify-center self-center text-xl">
              <AiOutlineForm className="self-center" />
              <p className="text-sm text-center self-center text-wrap">Form</p>
            </div>
          </Link>
          <Link className="self-center" href={"/crimereport"}>
            <div className="flex flex-col justify-center self-center text-xl">
              <FaClipboardList className="self-center" />
              <p className="text-sm text-center self-center text-wrap">Crimes</p>
            </div>
          </Link>
          <Link className="self-center" href={"/map"}>
            <div className="flex flex-col justify-center self-center text-xl">
              <FaMapLocationDot className="self-center" />
              <p className="text-sm text-center self-center text-wrap">Map</p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}

export default Navar;
