import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Parallax effects
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    "3D Web Development",
    "VFX & Visual Effects",
    "3D Modeling & Design",
    "UI/UX Design",
    "Animation & Motion",
    "Digital Branding"
  ];

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      value: "ali59.aa96@gmail.com",
      description: "Drop us a line anytime"
    },
    {
      icon: "📱",
      title: "Call Us",
      value: "+92 3312035946",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: "📍",
      title: "Visit Us",
      value: "123 Innovation Drive, Karachi City",
      description: "Our creative studio"
    },
    {
      icon: "💬",
      title: "Live Chat",
      value: "Available 24/7",
      description: "Instant support"
    }
  ];

  // Animated Input Component
  const AnimatedInput = ({ field, label, type = "text", textarea = false }) => {
    const isFocused = focusedField === field;
    const hasValue = formData[field].length > 0;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: Math.random() * 0.2 }}
        viewport={{ once: true }}
        className="relative group"
      >
        <motion.div
          animate={{
            scale: isFocused ? 1.02 : 1,
            rotateX: isFocused ? -2 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Glowing border effect */}
          <motion.div
            animate={{
              opacity: isFocused ? 0.6 : 0,
              scale: isFocused ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 rounded-2xl blur-sm"
          />
          
          <div className="relative">
            {textarea ? (
              <textarea
                value={formData[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                onFocus={() => setFocusedField(field)}
                onBlur={() => setFocusedField('')}
                rows={4}
                className="w-full p-4 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl text-white placeholder-transparent resize-none focus:outline-none focus:border-purple-400 transition-all duration-300"
                placeholder={label}
                required
              />
            ) : type === "select" ? (
              <select
                value={formData[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                onFocus={() => setFocusedField(field)}
                onBlur={() => setFocusedField('')}
                className="w-full p-4 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-purple-400 transition-all duration-300 appearance-none"
                required
              >
                <option value="" disabled className="bg-gray-800">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="bg-gray-800">
                    {service}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                value={formData[field]}
                onChange={(e) => handleInputChange(field, e.target.value)}
                onFocus={() => setFocusedField(field)}
                onBlur={() => setFocusedField('')}
                className="w-full p-4 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple-400 transition-all duration-300"
                placeholder={label}
                required
              />
            )}
            
            {/* Floating Label */}
            <motion.label
              animate={{
                y: isFocused || hasValue ? -45 : -20,
                scale: isFocused || hasValue ? 0.85 : 1,
                color: isFocused ? "#a855f7" : "#c4b5fd",
              }}
              transition={{ duration: 0.3 }}
              className="absolute left-4 top-4 pointer-events-none font-medium"
            >
              {label}
            </motion.label>

            {/* Field Icon */}
            <motion.div
              animate={{
                scale: isFocused ? 1.2 : 1,
                rotate: isFocused ? 360 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute right-4 top-4 text-purple-400"
            >
              {field === 'name' && '👤'}
              {field === 'email' && '📧'}
              {field === 'company' && '🏢'}
              {field === 'service' && '⚡'}
              {field === 'message' && '💬'}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-violet-900 via-black to-purple-900 py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-500 rounded-full blur-xl animate-pulse" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          style={{ opacity }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-purple-300 via-violet-300 to-pink-300 bg-clip-text text-transparent"
          >
            Let's Create Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your vision into an immersive digital reality? Let's discuss your next groundbreaking project.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              style={{ scale }}
              className="relative"
            >
              {/* Form Container */}
              <motion.div
                animate={{
                  rotateY: isSubmitted ? 180 : 0,
                }}
                transition={{ duration: 0.8 }}
                className="relative bg-gradient-to-br from-purple-800/20 to-violet-800/20 backdrop-blur-lg border border-purple-500/30 rounded-3xl p-8 shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {!isSubmitted ? (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    animate={{ opacity: isSubmitted ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-white mb-8 text-center"
                    >
                      Start Your Project
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <AnimatedInput field="name" label="Your Name" />
                      <AnimatedInput field="email" label="Email Address" type="email" />
                    </div>

                    <AnimatedInput field="company" label="Company Name" />
                    <AnimatedInput field="service" label="Service Needed" type="select" />
                    <AnimatedInput field="message" label="Project Details" textarea />

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: isSubmitting 
                          ? "0 0 50px rgba(147, 51, 234, 0.8)" 
                          : "0 0 30px rgba(147, 51, 234, 0.3)"
                      }}
                      className="w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-bold text-lg rounded-xl border border-purple-400/50 hover:border-purple-300 transition-all duration-300 relative overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          x: isSubmitting ? "100%" : "-100%",
                        }}
                        transition={{ duration: 1.5, repeat: isSubmitting ? Infinity : 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                      <span className="relative z-10">
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </span>
                    </motion.button>
                  </motion.form>
                ) : (
                  // Success Message
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 transform rotateY-180"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-6xl mb-6"
                    >
                      ✨
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-purple-200 text-lg">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8"
            >
              Get In Touch
            </motion.h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  x: 10,
                  rotateY: 5
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30"
                />
                
                <div className="relative flex items-center space-x-4">
                  <motion.div
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360 
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl"
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-purple-200 font-medium">
                      {info.value}
                    </p>
                    <p className="text-purple-300 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['🐦', '📘', '📷', '💼'].map((icon, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      rotate: 360
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full flex items-center justify-center text-xl hover:bg-purple-600/30 transition-all duration-300"
                  >
                    {icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-16 border-t border-purple-500/20"
        >
          <p className="text-purple-300 mb-4">
            Ready to start your next project? We're here to help!
          </p>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity 
            }}
            className="text-4xl"
          >
            🚀
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;