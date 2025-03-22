import React from "react";
import { motion } from "framer-motion";

const HomeServices = () => {
  const services = [
    {
      title: "Content Creative",
      image: "./images/content.png",
      description:
        "Innovative storytelling and dynamic visuals that captivate audiences, transforming ideas into powerful, memorable brand experiences.",
    },
    {
      title: "Digital Marketing",
      image: "./images/digital.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi hic earum fugiat provident enim rerum non laudantium dolor nostrum.",
    },
    {
      title: "Web Development",
      image: "./images/web.png",
      description:
        "Lorem, ipsum dolor sit amet consectetur, adipisicing elit. A cum mollitia, earum necessitatibus aut, dolor!",
    },
    {
      title: "SEO Optimization",
      image: "./images/seo.png",
      description:
        "Optimize your online presence and rank higher on search engines with our cutting-edge SEO strategies.",
    },
  ];

  return (
    <div className="container-fluid px-0 overflow-hidden">
      <section className="services-section py-5">
        <div className="container">
          <div className="section1 section2">
            <div>
              <motion.h2
                className="text-first"
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 1 }}
              >
                Our Services
              </motion.h2>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </motion.p>
              </motion.div>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="col-md-3 col-12 mb-4"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  className="card bg-third border-0 rounded-3 overflow-hidden h-100"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-img-top"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h3 className="text-second fw-bold">{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="card-footer text-center">
                    <a href="#" className="btn-link text-decoration-none">
                      Know more
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeServices;
