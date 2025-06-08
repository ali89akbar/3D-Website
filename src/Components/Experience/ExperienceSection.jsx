import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

const ExperienceSection = () => {
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
  const BlackswanIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          rotate: isHovered ? 360 : 0,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 border-4 border-blue-400 rounded-lg"
      />
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          opacity: isHovered ? [0.5, 1, 0.8] : 0.8,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded"
      />
      <motion.div
        animate={{
          y: isHovered ? [-2, 2, -2] : 0,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold"
      >
        BS
      </motion.div>
    </div>
  );

  const VentureDiveIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          rotate: isHovered ? [0, 180, 360] : 0,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0"
      >
        <div className="w-4 h-4 bg-green-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
        <div className="w-4 h-4 bg-emerald-400 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
        <div className="w-4 h-4 bg-teal-400 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2" />
        <div className="w-4 h-4 bg-cyan-400 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2" />
      </motion.div>
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.5, 1] : 1,
          opacity: isHovered ? [0.3, 0.8, 0.3] : 0.6,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
      />
    </div>
  );

  const SwagKicksIcon = ({ isHovered }) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg transform rotate-12" />
        <div className="absolute inset-1 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg" />
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
          className="absolute inset-2 bg-white/20 rounded backdrop-blur-sm flex items-center justify-center text-white font-bold text-xs"
        >
          SK
        </motion.div>
      </motion.div>
    </div>
  );

  const ItsoleraIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl"
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
        className="absolute inset-4 border-2 border-white rounded-lg flex items-center justify-center text-white font-bold text-sm"
      >
        IT
      </motion.div>
    </div>
  );

  const BlacktechIcon = ({ isHovered }) => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
        }}
        transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-700 to-black rounded-full"
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
        className="absolute inset-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs"
      >
        BT
      </motion.div>
    </div>
  );

  const experiences = [
    {
      id: 1,
      icon: BlackswanIcon,
      title: "Software Engineer",
      company: "Blackswan Design",
      duration: "Present",
      location: "Karachi, Pakistan",
      description: "Working on MERN and WordPress-based solutions for clients including Steelman Pakistan and Evoque Event Catering Management.",
      achievements: [
        "Developing responsive websites with custom CMS features",
        "Dynamic forms and booking systems implementation",
        "Cross-functional team collaboration",
        "Scalable and maintainable solutions delivery"
      ],
      color: "from-blue-600 to-cyan-700",
      current: true
    },
    {
      id: 2,
      icon: VentureDiveIcon,
      title: "Web Developer Intern",
      company: "VentureDive",
      duration: "Sep 2024 – Mar 2025",
      location: "Karachi, Pakistan",
      description: "Worked on Dawlati — a recruitment platform enhancing job seeker and employer experiences, and contributed to Intinere Hub — a travel platform.",
      achievements: [
        "Automated job matching and resume building features",
        "Data analytics integration for talent acquisition",
        "80%+ test coverage with zero lint issues",
        "Interactive travel guides and itinerary planning"
      ],
      color: "from-green-600 to-emerald-700"
    },
    {
      id: 3,
      icon: SwagKicksIcon,
      title: "Web Developer Intern",
      company: "SwagKicks",
      duration: "2024",
      location: "Karachi, Pakistan",
      description: "Contributed to website improvements for better product display and navigation while enhancing user experience.",
      achievements: [
        "Website improvements for product display",
        "Enhanced navigation systems",
        "Frontend performance optimization",
        "Reduced page load times"
      ],
      color: "from-orange-600 to-red-700"
    },
    {
      id: 4,
      icon: ItsoleraIcon,
      title: "Full Stack Developer Intern",
      company: "ITSOLERA Pvt Ltd",
      duration: "2023",
      location: "Remote, Islamabad",
      description: "Contributed to AI model API integration and UI development across multiple projects with complex back-end integrations.",
      achievements: [
        "AI model API integration",
        "User-friendly front-end interfaces",
        "Full Stack solutions delivery",
        "Cross-functional team collaboration"
      ],
      color: "from-purple-600 to-indigo-700"
    },
    {
      id: 5,
      icon: BlacktechIcon,
      title: "WordPress Developer",
      company: "Blacktech Technologies",
      duration: "2020",
      location: "Karachi, Pakistan",
      description: "Designed and deployed WordPress websites for various clients, focusing on performance, SEO, and responsiveness.",
      achievements: [
        "WordPress website design and deployment",
        "Performance and SEO optimization",
        "Custom themes and plugins",
        "Client branding requirements"
      ],
      color: "from-gray-600 to-black"
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
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
          >
            Building innovative solutions and growing through diverse technology experiences
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(experience.id)}
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
                className={`relative h-full bg-gradient-to-br ${experience.color} p-8 rounded-3xl backdrop-blur-sm border border-gray-500/30 shadow-2xl overflow-hidden`}
              >
                {/* Current role indicator */}
                {experience.current && (
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
                  />
                )}

                {/* Glowing effect on hover */}
                <motion.div
                  animate={{
                    opacity: hoveredCard === experience.id ? 0.3 : 0,
                    scale: hoveredCard === experience.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl"
                />

                {/* Card content */}
                <div className="relative z-10">
                  {/* Animated Icon */}
                  <experience.icon isHovered={hoveredCard === experience.id} />

                  <motion.div
                    animate={{
                      scale: hoveredCard === experience.id ? 1.05 : 1,
                    }}
                    className="mb-4"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {experience.title}
                    </h3>
                    <div className="text-lg font-semibold text-gray-200 mb-1">
                      {experience.company}
                    </div>
                    <div className="text-sm text-gray-300 mb-1">
                      {experience.duration}
                    </div>
                    <div className="text-sm text-gray-400">
                      {experience.location}
                    </div>
                  </motion.div>

                  <p className="text-gray-100 mb-6 leading-relaxed text-sm">
                    {experience.description}
                  </p>

                  {/* Achievements list */}
                  <motion.div
                    animate={{
                      opacity: hoveredCard === experience.id ? 1 : 0.7,
                      y: hoveredCard === experience.id ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          animate={{
                            x: hoveredCard === experience.id ? 5 : 0,
                          }}
                          transition={{ 
                            duration: 0.3, 
                            delay: achievementIndex * 0.05 
                          }}
                          className="flex items-center text-xs text-gray-200"
                        >
                          <motion.div
                            animate={{
                              scale: hoveredCard === experience.id ? [1, 1.2, 1] : 1,
                            }}
                            transition={{ 
                              duration: 0.5, 
                              delay: achievementIndex * 0.1,
                              repeat: hoveredCard === experience.id ? Infinity : 0,
                              repeatDelay: 2
                            }}
                            className="w-2 h-2 bg-gray-300 rounded-full mr-3 flex-shrink-0"
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      opacity: hoveredCard === experience.id ? 1 : 0,
                      y: hoveredCard === experience.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    View Details
                  </motion.button>
                </div>

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    rotate: hoveredCard === experience.id ? 360 : 0,
                    scale: hoveredCard === experience.id ? 1.5 : 1,
                    opacity: hoveredCard === experience.id ? 0.1 : 0.05,
                  }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 w-24 h-24 bg-white rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          >
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-gray-300">Companies Worked</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          >
            <div className="text-4xl font-bold text-white mb-2">1.5+</div>
            <div className="text-gray-300">Years Experience</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          >
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </motion.div>
        </motion.div>

        {/* Contact CTA */}
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
              boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full border border-blue-400/50 hover:border-blue-300 transition-all duration-300"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;