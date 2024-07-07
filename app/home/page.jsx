import React from "react";
import { FaWpforms } from "react-icons/fa";
import { MdImageSearch } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";
function page(props) {

    return (
        <>
          <section class="text-gray-400 body-font bg-gray-900">
            <div class="container px-5 py-8 mx-auto">
              <div class="flex flex-col text-center w-full mb-8">
                <h2 class="text-xl text-blue-500 font-bold  tracking-widest  title-font mb-1">
                  Welcome
                </h2>
                
                <p class="lg:w-2/3 mx-auto leading-tight text-base">
                Your safety is our priority. While the police department strives to respond quickly, there are times when they may not be able to reach a crime scene immediately.  This is where a revolutionary crime reporting procedure can empower you to take action.  Follow these steps, and together we can make our city safer.
                </p>
              </div>
              <div class="flex flex-wrap">
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-2 border-l-2 border-gray-800">
                  <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                    Infromation About Crime
                  </h2>
                <div className="flex flex-row gap-4">
                <FaWpforms className=" w-16 h-16 text-blue-400 " />
                <p class=" text-wrap max-w-fit text-base mb-4">
                   Add Information about Time,Location,Type,
                   Discription(Optional).
                  </p>
                  </div> 
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                  <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                    Uploading Images
                  </h2>
                <div>
              <div className="flex flex-row gap-4">
              <MdImageSearch className=" w-16 h-16 text-blue-400 " />
                  <p class=" text-base mb-4 self-center my-2">
                    Click the Images and upload if possible.
                  </p>
              </div>
                </div>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                  <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                   Your Information
                  </h2>
                  <div className="flex flex-row gap-4">
    
                  <IoPerson className="w-12 h-12 text-blue-400 "/>
                  <p class=" text-base mb-4 self-center ">
                   Submit your Information (Optional).
                  </p>
                  </div>
                </div>
              </div>
             <Link href={'/form'}>
             <button class="flex mx-auto mb-8 mt-4 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Report Crime
              </button>
             </Link>
            </div>
          </section>
        </>
      );
}



export default page

