import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-purple-200 pt-12 pb-6 border-t border-violet-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-violet-400">Infinity X Dynamics</h3>
          <p className="text-sm leading-relaxed">
            Creating immersive, animated, and high-end digital experiences using cutting-edge 3D and VFX technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-violet-400">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-violet-300 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-violet-300 transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-violet-300 transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-violet-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-violet-400">Connect</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-xl" />
              <a
                href="https://www.linkedin.com/in/syed-ali-akbar-760051204/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-300 transition"
              >
                Syed Ali Akbar
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-xl" />
              <a
                href="https://github.com/ali89akbar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-300 transition"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              <a
                href="mailto:ali59.aa96@gmail.com"
                className="hover:text-violet-300 transition"
              >
                ali59.aa96@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center border-t border-violet-800 pt-4 text-sm">
        © {new Date().getFullYear()} Syed Ali Akbar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
