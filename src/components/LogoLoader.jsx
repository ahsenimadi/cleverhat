import React, { useEffect, useState } from "react";
import gsap from "gsap";

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

  useEffect(() => {
    gsap.to(".water", {
      height: `${loadingPercentage}%`,
      duration: 0.2,
      ease: "power2.out",
    });
  }, [loadingPercentage]);

  return (
    <div className="logo-wrapper">
      <div className="water"></div>
      <div className="loading-text">Loading... {loadingPercentage}%</div>
    </div>
  );
};

export default LogoLoader;
