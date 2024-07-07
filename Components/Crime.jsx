import Link from 'next/link';
import React from 'react';

function Crime({ crime, date, name, mobileNumber, description, coordinates, image }) {
  return (
    <div className="container px-5 py-8 mx-auto">
      <div className="divide-y-2 divide-gray-800">
        <div className="py-4 flex flex-col md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-white text-xl">
              {crime}
            </span>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-xl font-medium text-white title-font mb-2 text-nowrap">
              Name: {name}
              <br />
              Mobile Number: {mobileNumber}
            </h2>
            <p className="leading-relaxed">{description}</p>
            {image && (
              <a
                href={image}
                download
                className="photo bg-blue-400 p-2 text-white font-semibold rounded-md inline-block mt-2"
              >
                Download Photo
              </a>
            )}
            <Link href={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.long}`} className="link text-blue-400 mx-4 inline-flex items-center mt-4" target='_blank'>
              Get Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crime;
