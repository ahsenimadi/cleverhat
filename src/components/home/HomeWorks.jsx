import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HomeWorks = () => {
  const works = [
    { title: "EREENA", image: "./images/works/1.webp" },
    { title: "LAVIVER", image: "./images/works/2.jpg" },
    {
      title: "GMR MANOHAR INTERNATIONAL AIRPORT",
      image: "./images/works/3.jpg",
    },
    { title: "VARNI", image: "./images/works/4.jpg" },
    { title: "BOND.AI", image: "./images/works/5.png" },
  ];

  const [textColors, setTextColors] = useState([]);

  useEffect(() => {
    const analyzeImages = async () => {
      const colors = await Promise.all(
        works.map(async (work) => {
          return await getContrastColor(work.image);
        })
      );
      setTextColors(colors);
    };
    analyzeImages();
  }, []);

  // Function to calculate brightness and return contrast color
  const getContrastColor = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = src;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        let totalBrightness = 0;
        for (let i = 0; i < data.length; i += 4) {
          const brightness =
            data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
          totalBrightness += brightness;
        }
        const avgBrightness = totalBrightness / (data.length / 4);

        // Return white for dark images, black for light images
        resolve(avgBrightness > 128 ? "#000" : "#fff");
      };
    });
  };

  return (
    <div>
      {works.map((work, index) => {
        const ref = useRef(null);
        const { scrollYProgress } = useScroll({
          target: ref,
          offset: ["start end", "end start"],
        });

        // Background Animation with Parallax Effect
        const backgroundOpacity = useTransform(
          scrollYProgress,
          [0, 0.5, 1],
          [0, 1, 1]
        );
        const backgroundY = useTransform(
          scrollYProgress,
          [0, 1],
          ["0%", "-50%"]
        );

        // Title Animation
        const titleY = useTransform(scrollYProgress, [0, 0.75], ["100%", "0%"]);
        const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

        const textColor = textColors[index] || "#fff"; // Fallback to white

        return (
          <section
            key={index}
            ref={ref}
            className={`work${index + 1}`}
            style={{
              height: "100vh",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Background Layer with Parallax Effect */}
            <motion.div
              className="background-layer"
              style={{
                backgroundImage: `url(${work.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: backgroundOpacity,
                transform: backgroundY,
              }}
            ></motion.div>

            {/* Content Layer */}
            <div
              className="container py-5 position-relative"
              style={{ height: "100%" }}
            >
              <div className="row h-100">
                <div className="col-md-6 section1 d-flex align-items-start">
                  <motion.h2
                    className="mt-5"
                    style={{
                      y: titleY,
                      opacity: titleOpacity,
                      fontSize: "4rem",
                      color: textColor,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {work.title}
                  </motion.h2>
                </div>
                <div className="col-md-6 section2 d-flex align-items-center">
                  <motion.p
                    className="fs-4"
                    style={{
                      opacity: titleOpacity,
                      color: textColor,
                      fontWeight: "bold",
                    }}
                  >
                    Experience the innovation and brilliance of {work.title}{" "}
                    through our creative projects and groundbreaking ideas.
                  </motion.p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default HomeWorks;
