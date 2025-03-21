import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import LogoLoader from "../components/LogoLoader";
import Footer from "../components/Footer";

const Front = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <LogoLoader />
  ) : (
    <div className="bg-black text-light">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Front;
