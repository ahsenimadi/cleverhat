import React from "react";
import HomeServices from "../components/home/HomeServices";
const HomeWorks = React.lazy(() => import("../components/home/HomeWorks"));
const HomeClients = React.lazy(() => import("../components/home/HomeClients"));
import HomeAbout from "../components/home/HomeAbout";
import HomeVideo from "../components/home/HomeVideo";

const Home = () => {
  return (
    <>
      <HomeVideo />
      <HomeAbout />
      <HomeServices />
      <HomeWorks />
      <HomeClients />
    </>
  );
};

export default Home;
