import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://mern-development-server.vercel.app/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <Link
          key={category.id}
          rel="noopener noreferrer"
          to={`/category/${category.id}`}
        >
          <button
            type="button"
            className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
