import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  // Timeline data
  const timelineItems = [
    {
      year: "2020",
      title: "Foundation",
      description: "Started with a vision to revolutionize digital experiences",
      icon: "🚀"
    },
    {
      year: "2021",
      title: "First Breakthrough",
      description: "Launched our first immersive 3D web platform",
      icon: "💎"
    },
    {
      year: "2022",
      title: "VFX Innovation",
      description: "Pioneered real-time visual effects in web environments",
      icon: "✨"
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Award-winning projects across multiple industries",
      icon: "🏆"
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Leading the next generation of digital artistry",
      icon: "🌟"
    }
  ];

  return (
    <div className="relative">
      {/* Main About Section */}
      <section
        ref={ref}
        className="min-h-screen bg-gradient-to-b from-black via-violet-900 to-purple-900 flex flex-col lg:flex-row items-center justify-center lg:px-24 px-10 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute inset-0 opacity-20"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-violet-500 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Text Section with enhanced parallax */}
        <motion.div
          style={{ y: yText, opacity, scale }}
          className="lg:w-1/2 w-full text-white z-10 relative"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent"
          >
            About Us
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-purple-200 leading-relaxed mb-8"
          >
            Infinity X Dynamics is at the forefront of immersive digital
            experiences. From real-time 3D environments to stunning VFX, we craft
            innovative, artistic, and high-tech web solutions that push the
            boundaries of what's possible online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            {["3D Web Development", "VFX & Animation", "Immersive Experiences", "Digital Art"].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-purple-800/30 border border-purple-500/50 rounded-full text-purple-200">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section with enhanced effects */}
        <motion.div
          style={{ y: yImage, scale }}
          className="lg:w-1/2 w-full flex justify-center items-center mt-10 lg:mt-0 relative"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <img
              src="https://i.ibb.co/ymLXTy6T/DP2-removebg-preview.png"
              alt="About Visual"
              className="max-w-md w-full object-contain relative z-10"
            />
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full blur-xl scale-110 -z-10"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Scroll-based Timeline Section */}
      <section className="relative bg-gradient-to-b from-purple-900 via-black to-violet-900 py-20">
        <div className="max-w-6xl mx-auto px-10">
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent"
          >
            Our Journey
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-violet-500 to-purple-500 rounded-full"></div>

            {timelineItems.map((item, index) => {
              const itemRef = useRef(null);
              const { scrollYProgress: itemProgress } = useScroll({
                target: itemRef,
                offset: ["start end", "end center"],
              });

              const itemY = useTransform(itemProgress, [0, 1], [100, 0]);
              const itemOpacity = useTransform(itemProgress, [0, 0.5, 1], [0, 0.5, 1]);
              const itemScale = useTransform(itemProgress, [0, 0.5, 1], [0.8, 0.9, 1]);

              return (
                <motion.div
                  key={index}
                  ref={itemRef}
                  style={{ y: itemY, opacity: itemOpacity, scale: itemScale }}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full border-4 border-white shadow-lg z-10"
                  ></motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                    }`}
                  >
                    <div className="bg-gradient-to-br from-purple-800/40 to-violet-800/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 shadow-2xl">
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-4">{item.icon}</span>
                        <div>
                          <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                          <span className="text-purple-300 font-semibold">{item.year}</span>
                        </div>
                      </div>
                      <p className="text-purple-200 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto px-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "5", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-purple-300 text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutSection;