import React from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "./Sidebar";
import CourseCard from './CourseCard';

const Courses = () => {
  const coursesData = useLoaderData();

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 grid  grid-flow-col gap-4">
      <div className="row-span-3">
        <aside className="w-full p-6 sm:w-60 bg-gray-900 text-gray-100">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
                Getting Started
              </h2>

              <div className="flex flex-col space-y-1">
                <Sidebar />
              </div>
            </div>
          </nav>
        </aside>
      </div>
      <div className="col-span-2">
        {coursesData.map((data) => (
          <CourseCard key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
