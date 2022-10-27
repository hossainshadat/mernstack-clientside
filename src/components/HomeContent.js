import React from "react";
import Card from "./Card";

function HomeContent({ coursesData }) {
  return (
    <>
      <h2 className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-left">
        What to Learn
      </h2>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {coursesData.map((data) => (
            <Card key={data._id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeContent;
