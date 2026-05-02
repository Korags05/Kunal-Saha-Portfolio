'use client';

import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';
import { skills } from '@/lib/data';

export default function Skills() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skillCategories = [
    { label: 'Languages', key: 'languages' },
    { label: 'Android Dev', key: 'android' },
    { label: 'Backend', key: 'backend' },
    { label: 'Databases', key: 'databases' },
    { label: 'Tools', key: 'tools' },
    { label: 'Cloud', key: 'Cloud' },
    { label: 'Fundamentals', key: 'Fundamentals' },
    { label: 'Concepts', key: 'Concepts' },
  ];

  return (
    <section id="skills" className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative blobs - hidden on mobile */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute top-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#E85D3F]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      )}
      {/* Content wrapper */}
      <div className="w-full max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            My Skills & Stack
          </h2>
        </motion.div>

        {/* Desktop View - Table */}
        <motion.div
          className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-6 lg:px-8 py-5 text-left text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Category
                  </th>
                  <th className="px-6 lg:px-8 py-5 text-left text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Tools & Tech
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {skillCategories.map((category, index) => (
                  <motion.tr
                    key={category.key}
                    variants={itemVariants}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    {/* Category Column */}
                    <td className="px-6 lg:px-8 py-6 text-gray-900 font-semibold text-base whitespace-nowrap">
                      {category.label}
                    </td>

                    {/* Tools Column */}
                    <td className="px-6 lg:px-8 py-6">
                      <div className="flex flex-wrap gap-2">
                        {skills[category.key as keyof typeof skills].map(
                          (tech: string) => (
                            <motion.span
                              key={tech}
                              whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
                              className="px-3 py-1.5 bg-[#E85D3F]/10 text-[#E85D3F] rounded-full text-sm font-medium border border-[#E85D3F]/20 hover:bg-[#E85D3F]/20 transition-colors cursor-pointer"
                            >
                              {tech}
                            </motion.span>
                          )
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Mobile View - Cards */}
        <motion.div
          className="md:hidden grid grid-cols-1 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.key}
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key as keyof typeof skills].map(
                  (tech: string) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#E85D3F]/10 text-[#E85D3F] rounded-full text-xs sm:text-sm font-medium border border-[#E85D3F]/20"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.p
          className="text-center text-gray-600 mt-12 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Always learning and expanding the stack →
        </motion.p>
      </div>
    </section>
  );
}
