import React from "react";

const HomeVideo = () => {
  return (
    <div className="container-fluid px-0 overflow-hidden">
      <div className="banner">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="images/logo.png"
          aria-label="Promotional background video showcasing our services"
        >
          <source src="videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HomeVideo;
