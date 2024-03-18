"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { collectionAPI } from "./collectionAPI";

const Data = () => {
  const [collections, setCollections] = useState([]);

  // useEffect(() => {
  //   fetch(collectionAPI)
  //     .then((response) => response.json())
  //     .then((data) => setCollections(data))
  //     .catch((err) => console.error("Failed to fetch", err));
  // }, []);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-0 w-full">
      <div className="text-white lg:px-0 lg:py-6 border-r-2 border-b-2 border-black text-center w-full">
        <Image
          src="/collections/1.png"
          alt="All"
          width={400}
          height={400}
          className="border-b-[1px] border-black w-fit lg:ml-8 lg:py-3 py-2 px-2 lg:px-0"
        />
        <div className="p-4">
          <h1 className="p-2">Name</h1>
          <h1>price</h1>
        </div>
      </div>
      <div className="text-white lg:px-0 lg:py-6 border-r-2 border-b-2 border-black text-center w-full">
        <Image
          src="/collections/2.png"
          alt="All"
          width={400}
          height={400}
          className="border-b-[1px] border-black w-fit lg:ml-8 lg:py-3 py-2 px-2 lg:px-0"
        />
        <div className="p-4">
          <h1 className="p-2">Name</h1>
          <h1>price</h1>
        </div>
      </div>
      <div className="text-white lg:px-0 lg:py-6 border-r-2 border-b-2 border-black text-center w-full">
        <Image
          src="/collections/3.png"
          alt="All"
          width={400}
          height={400}
          className="border-b-[1px] border-black w-fit lg:ml-8 lg:py-3 py-2 px-2 lg:px-0"
        />
        <div className="p-4">
          <h1 className="p-2">Name</h1>
          <h1>price</h1>
        </div>
      </div>
      <div className="text-white lg:px-0 lg:py-6 border-r-2 border-b-2 border-black text-center w-full">
        <Image
          src="/collections/4.png"
          alt="All"
          width={400}
          height={400}
          className="border-b-[1px] border-black w-fit lg:ml-8 lg:py-3 py-2 px-2 lg:px-0"
        />
        <div className="p-4">
          <h1 className="p-2">Name</h1>
          <h1>price</h1>
        </div>
      </div>
      <div className="text-white lg:px-0 lg:py-6 border-r-2 border-b-2 border-black text-center w-full">
        <Image
          src="/collections/5.png"
          alt="All"
          width={400}
          height={400}
          className="border-b-[1px] border-black w-fit lg:ml-8 lg:py-3 py-2 px-2 lg:px-0"
        />
        <div className="p-4">
          <h1 className="p-2">Name</h1>
          <h1>price</h1>
        </div>
      </div>
      <div className="text-white lg:px-0 lg:py-6 border-r-2 border-b-2 border-black text-center w-full">
        <Image
          src="/collections/6.png"
          alt="All"
          width={400}
          height={400}
          className="border-b-[1px] border-black w-fit lg:ml-8 lg:py-3 py-2 px-2 lg:px-0"
        />
        <div className="p-4">
          <h1 className="p-2">Name</h1>
          <h1>price</h1>
        </div>
      </div>
      <div className="text-white lg:px-0 lg:py-6 border-r-2 border-black text-center w-full">
        <Image
          src="/collections/7.png"
          alt="All"
          width={400}
          height={400}
          className="border-b-[1px] border-black w-fit lg:ml-8 lg:py-3 py-2 px-2 lg:px-0"
        />
        <div className="p-4">
          <h1 className="p-2">Name</h1>
          <h1>price</h1>
        </div>
      </div>
    </div>
  );
};

export default Data;
