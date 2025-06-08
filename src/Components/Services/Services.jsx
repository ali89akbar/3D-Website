import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Animated Icon Components
  const WebDevIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 border-4 border-purple-400 rounded-lg"
      />
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.5, 1, 0.8] : 0.8,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-2 bg-gradient-to-br from-purple-500 to-violet-600 rounded"
      />
      <motion.div
        animate={{
          y: isHovered ? [-2, 2, -2] : 0,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold"
      >
        &lt;/&gt;
      </motion.div>
    </div>
  );

  const VFXIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          rotate: isHovered ? [0, 180, 360] : 0,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0"
      >
        <div className="w-4 h-4 bg-purple-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
        <div className="w-4 h-4 bg-violet-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        <div className="w-4 h-4 bg-pink-400 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" />
        <div className="w-4 h-4 bg-blue-400 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" />
      </motion.div>
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.5, 1] : 1,
          opacity: isHovered ? [0.3, 0.8, 0.3] : 0.6,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
      />
    </div>
  );

  const ThreeDIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          rotateY: isHovered ? 360 : 0,
          rotateX: isHovered ? 180 : 0,
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg transform rotate-12" />
        <div className="absolute inset-1 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg" />
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          className="absolute inset-2 bg-white/20 rounded backdrop-blur-sm flex items-center justify-center text-white font-bold"
        >
          3D
        </motion.div>
      </motion.div>
    </div>
  );

  const UIUXIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl"
      />
      <motion.div
        animate={{
          y: isHovered ? [-5, 5] : 0,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, repeatType: "reverse" }}
        className="absolute inset-2 bg-white/20 rounded-xl"
      />
      <motion.div
        animate={{
          opacity: isHovered ? [0.5, 1, 0.5] : 0.8,
        }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-4 border-2 border-white rounded-lg flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </div>
  );

  const AnimationIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        className="absolute inset-0"
      >
        {[0, 60, 120, 180, 240, 300].map((rotation, index) => (
          <motion.div
            key={index}
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? [0.4, 1, 0.4] : 0.6,
            }}
            transition={{
              duration: 1.5,
              repeat: isHovered ? Infinity : 0,
              delay: index * 0.1,
            }}
            className="absolute w-3 h-3 bg-purple-400 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${rotation}deg) translateY(-24px)`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );

  const BrandingIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full"
      />
      <motion.div
        animate={{
          rotate: isHovered ? [0, 360] : 0,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
        className="absolute inset-4 border-4 border-white rounded-full"
      />
      <motion.div
        animate={{
          scale: isHovered ? [1, 0.8, 1] : 1,
        }}
        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-6 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold text-xs"
      >
        B
      </motion.div>
    </div>
  );

  const services = [
    {
      id: 1,
      icon: WebDevIcon,
      title: "3D Web Development",
      description: "Cutting-edge web applications with immersive 3D environments, WebGL integration, and real-time interactions that captivate users.",
      features: ["WebGL Integration", "Real-time Rendering", "Interactive Experiences", "Performance Optimization"],
      color: "from-purple-600 to-violet-700"
    },
    {
      id: 2,
      icon: VFXIcon,
      title: "VFX & Visual Effects",
      description: "Stunning visual effects and motion graphics that bring your digital content to life with cinematic quality and artistic flair.",
      features: ["Motion Graphics", "Particle Systems", "Shader Effects", "Post-processing"],
      color: "from-violet-600 to-purple-700"
    },
    {
      id: 3,
      icon: ThreeDIcon,
      title: "3D Modeling & Design",
      description: "Professional 3D modeling, texturing, and rendering services for web, games, and interactive applications.",
      features: ["Asset Creation", "Texture Design", "3D Optimization", "Format Conversion"],
      color: "from-purple-700 to-pink-600"
    },
    {
      id: 4,
      icon: UIUXIcon,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetic appeal with intuitive functionality for exceptional user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      color: "from-pink-600 to-violet-600"
    },
    {
      id: 5,
      icon: AnimationIcon,
      title: "Animation & Motion",
      description: "Dynamic animations and micro-interactions that enhance user engagement and create memorable digital experiences.",
      features: ["Micro-interactions", "Loading Animations", "Transition Effects", "Interactive Elements"],
      color: "from-violet-700 to-blue-600"
    },
    {
      id: 6,
      icon: BrandingIcon,
      title: "Digital Branding",
      description: "Comprehensive branding solutions that establish strong digital identities and create lasting impressions across all platforms.",
      features: ["Brand Strategy", "Visual Identity", "Digital Guidelines", "Asset Creation"],
      color: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-violet-900 via-black to-purple-900 py-20 overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-violet-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500 rounded-full blur-xl"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          style={{ opacity }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-violet-300 to-pink-300 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming ideas into immersive digital realities with cutting-edge technology and artistic vision
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  rotateY: 5,
                }}
                transition={{ duration: 0.3 }}
                className={`relative h-full bg-gradient-to-br ${service.color} p-8 rounded-3xl backdrop-blur-sm border border-purple-500/30 shadow-2xl overflow-hidden`}
              >
                {/* Glowing effect on hover */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === service.id ? 0.3 : 0,
                    scale: hoveredCard === service.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl blur-xl"
                />

                {/* Card content */}
                <div className="relative z-10">
                  {/* Animated Icon */}
                  <service.icon isHovered={hoveredCard === service.id} />

                  <motion.h3
                    animate={{
                      scale: hoveredCard === service.id ? 1.05 : 1,
                    }}
                    className="text-2xl font-bold text-white mb-4"
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-purple-100 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <motion.div
                    animate={{
                      opacity: hoveredCard === service.id ? 1 : 0.7,
                      y: hoveredCard === service.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          animate={{
                            x: hoveredCard === service.id ? 5 : 0,
                          }}
                          transition={{ 
                            duration: 0.3, 
                            delay: featureIndex * 0.05 
                          }}
                          className="flex items-center text-sm text-purple-200"
                        >
                          <motion.div
                            animate={{
                              scale: hoveredCard === service.id ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ 
                              duration: 0.5, 
                              delay: featureIndex * 0.1,
                              repeat: hoveredCard === service.id ? Infinity : 0,
                              repeatDelay: 2
                            }}
                            className="w-2 h-2 bg-purple-300 rounded-full mr-3"
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      opacity: hoveredCard === service.id ? 1 : 0,
                      y: hoveredCard === service.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    rotate: hoveredCard === service.id ? 360 : 0,
                    scale: hoveredCard === service.id ? 1.5 : 1,
                    opacity: hoveredCard === service.id ? 0.1 : 0.05,
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-white rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 50px rgba(147, 51, 234, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg rounded-full border border-purple-400/50 hover:border-purple-300 transition-all duration-300"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;