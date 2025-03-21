import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LogoLoader = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div className="logo-wrapper">
      <motion.div
        className="water"
        animate={{ height: `${loadingPercentage}%` }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      ></motion.div>
      <div className="loading-text">Loading... {loadingPercentage}%</div>
    </div>
  );
};

export default LogoLoader;
