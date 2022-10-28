import React from "react";
import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import HomeContent from "./HomeContent";

const Home = () => {
  const coursesData = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <HomeContent coursesData={coursesData}></HomeContent>
    </div>
  );
};

export default Home;
