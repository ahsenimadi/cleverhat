import React from "react";
import { motion } from "framer-motion";

const HomeClients = () => {
  // Generate 20 client images
  const clients = Array.from(
    { length: 20 },
    (_, i) => `/images/clients/${i + 1}.png`
  );

  // Animation Variants
  const createVariants = (direction) => ({
    animate: {
      x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  });

  return (
    <section className="home-clients">
      <div className="container">
        <div className="section1">
          <motion.h2
            initial={{ opacity: 0, y: "100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 1 }}
          >
            Our Clients
          </motion.h2>
        </div>

        {/* First Row - Left to Right */}
        <div className="clients-wrapper">
          <motion.div
            className="clients-row"
            variants={createVariants("left")}
            animate="animate"
          >
            {clients.slice(0, 10).map((client, index) => (
              <motion.div
                className="client-item"
                key={`client1-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={client} alt={`Client ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="clients-wrapper">
          <motion.div
            className="clients-row"
            variants={createVariants("right")}
            animate="animate"
          >
            {clients.slice(10, 20).map((client, index) => (
              <motion.div
                className="client-item"
                key={`client2-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={client} alt={`Client ${index + 11}`} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
