'use client';

import { motion, Variants } from 'framer-motion';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Top Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
            <div className="inline-block bg-[#E85D3F] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white font-bold text-xs sm:text-sm">
              Korags05
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Building scalable Android and full-stack solutions that make a real impact.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-white text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#E85D3F] transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-400 hover:text-[#E85D3F] transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-[#E85D3F] transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-[#E85D3F] transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
            <h4 className="font-semibold text-white text-sm md:text-base">Connect</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E85D3F] transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#E85D3F] transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-400 hover:text-[#E85D3F] transition-colors duration-300"
                >
                  Email
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-6 sm:mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-gray-400 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p>
            Built with ❤️ and ☕
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
