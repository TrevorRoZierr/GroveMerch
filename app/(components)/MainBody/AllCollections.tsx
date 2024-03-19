"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AllCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/collections")
      .then((response) => response.json())
      .then((data) => setCollections(data))
      .catch((err) => console.error("Failed to fetch", err));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-0 w-full">
      {collections.map((item: any) => (
        <div
          className="text-black lg:px-0 lg:py-6 border-r-2 border-b-2 border-black text-center w-full"
          key={item.id}
        >
          <Image
            src={item.image}
            alt="All"
            width={400}
            height={400}
            className="border-b-[1px] border-black w-fit lg:ml-8 lg:py-3 py-2 px-2 lg:px-0"
          />
          <div className="p-4">
            <h1 className="p-2 text-black lg:text-xl text-lg font-unbounded font-semibold">
              {item.name}
            </h1>
            <h1 className="text-black lg:text-md text-sm font-unbounded font-medium">
              ₹ - {item.price}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCollections;
