import React from "react";
import { motion } from "motion/react";
import HomeServices from "../components/HomeServices";
import HomeClients from "../components/HomeClients";

const Home = () => {
  return (
    <>
      <div className="banner">
        <video autoPlay loop muted playsInline>
          <source src="videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="about text-dark">
        <div className="container py-5">
          <div className="section1">
            <motion.h2
              initial={{ opacity: 0, y: "100%" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              Who we are?
            </motion.h2>
          </div>
          <div className="section2">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                We’re a digital marketing agency that exists to help business
                owners achieve their dreams & we can’t wait to hear about yours.
              </motion.p>
              <p className="mb-5">Let’s put on your clever hat!</p>
              <a href="#" className="about-btn">
                Know more
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <HomeServices />
      <HomeClients />
    </>
  );
};

export default Home;
