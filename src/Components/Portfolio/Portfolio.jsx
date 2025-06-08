import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "3D Web" },
    { id: "vfx", name: "VFX" },
    { id: "mobile", name: "Mobile" },
    { id: "branding", name: "Branding" }
  ];

  const projects = [
    {
      id: 1,
      title: "Immersive E-Commerce Platform",
      category: "web",
      description: "Revolutionary 3D shopping experience with WebGL integration and real-time product customization.",
      image: "https://images.unsplash.com/photo-1460925189444-8e6e5b95ff0c?w=800&h=600&fit=crop",
      video: "https://www.pexels.com/video/seo-web-design-search-google-4549682/", // Placeholder
      technologies: ["Three.js", "WebGL", "React", "GSAP"],
      year: "2024",
      client: "TechCorp Inc.",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 2,
      title: "Cinematic VFX Showcase",
      category: "vfx",
      description: "High-end visual effects and motion graphics for entertainment industry projects.",
      image: "https://www.gettyimages.com/detail/photo/couple-using-vr-glasses-in-car-dealership-royalty-free-image/748334339?adppopup=true",
      video: "https://www.gettyimages.com/detail/video/jumping-through-metaverse-portal-stock-footage/2195561042",
      technologies: ["After Effects", "Cinema 4D", "Blender", "Premiere"],
      year: "2024",
      client: "MediaStudio",
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 3,
      title: "Interactive AR Mobile App",
      category: "mobile",
      description: "Augmented reality mobile application with advanced 3D object recognition and tracking.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      video: "https://player.vimeo.com/video/sample",
      technologies: ["Unity", "ARCore", "ARKit", "C#"],
      year: "2023",
      client: "Innovation Labs",
      color: "from-purple-600 to-pink-500"
    },
    {
      id: 4,
      title: "Dynamic Brand Identity System",
      category: "branding",
      description: "Comprehensive digital branding with animated logos and interactive brand guidelines.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      video: "https://player.vimeo.com/video/sample",
      technologies: ["Illustrator", "After Effects", "Figma", "Lottie"],
      year: "2023",
      client: "StartupX",  
      color: "from-pink-500 to-violet-500"
    },
    {
      id: 5,
      title: "3D Portfolio Website",
      category: "web",
      description: "Award-winning 3D portfolio website with particle systems and interactive animations.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
      video: "https://player.vimeo.com/video/sample",
      technologies: ["Three.js", "GSAP", "WebGL", "Shaders"],
      year: "2023",
      client: "Creative Agency",
      color: "from-violet-600 to-blue-500"
    },
    {
      id: 6,
      title: "Holographic Product Visualization",
      category: "vfx",
      description: "Cutting-edge holographic effects for product launches and marketing campaigns.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      video: "https://player.vimeo.com/video/sample",
      technologies: ["Houdini", "Unreal Engine", "Nuke", "Maya"],
      year: "2024",
      client: "FutureTech",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // 3D Tile Component
  const ProjectTile = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, y: -50, rotateX: 10 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
        onClick={() => setSelectedProject(project)}
        className="group cursor-pointer perspective-1000"
      >
        <motion.div
          whileHover={{ 
            scale: 1.05,
            rotateY: 5,
            rotateX: -5,
            z: 50
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform-gpu"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
          </div>

          {/* Glowing border effect */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 rounded-2xl blur-sm"
          />

          {/* Content Overlay */}
          <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
            {/* Top Section - Category & Year */}
            <div className="flex justify-between items-start">
              <motion.span
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  y: isHovered ? -5 : 0
                }}
                className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold uppercase tracking-wide"
              >
                {project.category}
              </motion.span>
              <motion.span
                animate={{ 
                  opacity: isHovered ? 1 : 0.7,
                  x: isHovered ? 5 : 0
                }}
                className="text-sm font-semibold"
              >
                {project.year}
              </motion.span>
            </div>

            {/* Center - Play Button (appears on hover) */}
            <motion.div
              animate={{
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : 180
              }}
              transition={{ duration: 0.3 }}
              className="self-center"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <motion.div
                  animate={{ x: isHovered ? 2 : 0 }}
                  className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"
                />
              </div>
            </motion.div>

            {/* Bottom Section - Project Info */}
            <motion.div
              animate={{ 
                y: isHovered ? -10 : 0,
                opacity: isHovered ? 1 : 0.9
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-200 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-purple-100 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <motion.span
                    key={index}
                    animate={{ 
                      scale: isHovered ? 1.05 : 1,
                      opacity: isHovered ? 1 : 0.8
                    }}
                    transition={{ delay: index * 0.05 }}
                    className="text-xs px-2 py-1 bg-white/15 rounded-full"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <p className="text-xs text-purple-200 opacity-75">
                Client: {project.client}
              </p>
            </motion.div>
          </div>

          {/* 3D Depth Lines */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.3 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
            <div className="absolute top-4 bottom-4 right-4 w-px bg-gradient-to-b from-transparent via-white to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  // Project Detail Modal
  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        className="bg-gradient-to-br from-purple-900 to-violet-900 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-purple-300 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center text-white">
              Video Preview Placeholder
              <div className="ml-2 w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-0.5" />
              </div>
            </div>
          </div>
          
          <div className="text-white">
            <p className="text-lg mb-4">{project.description}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-700/50 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Client:</h4>
                <p>{project.client}</p>
              </div>
              <div>
                <h4 className="font-semibold">Year:</h4>
                <p>{project.year}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-purple-900 via-black to-violet-900 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500 rounded-full blur-xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          style={{ opacity }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-violet-300 to-pink-300 bg-clip-text text-transparent"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
          >
            Showcasing our finest work in 3D web development, VFX, and immersive digital experiences
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg'
                  : 'bg-white/10 text-purple-200 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectTile key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
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
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;