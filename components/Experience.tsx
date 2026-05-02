'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { experience } from '@/lib/data';

type ExperienceColor = 'orange' | 'green' | 'blue';
export default function Experience() {
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const getCompanyInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };
  const colorMap = {
    purple: {
      bg: 'bg-[#7C3AED]/5 border-[#7C3AED]/20',
      badge: 'bg-[#7C3AED]/10 text-[#7C3AED]',
      gradient: 'from-[#7C3AED] to-[#5B21B6]',
      line: 'from-[#7C3AED]',
    },
    green: {
      bg: 'bg-green-50 border-green-200',
      badge: 'bg-green-100 text-green-700',
      gradient: 'from-green-400 to-green-500',
      line: 'from-green-400',
    },
    blue: {
      bg: 'bg-blue-50 border-blue-200',
      badge: 'bg-blue-100 text-blue-700',
      gradient: 'from-blue-400 to-blue-500',
      line: 'from-blue-400',
    },
  };

  return (
    <section id="experience" className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#E85D3F]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      )}
      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Where I've Worked
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
            Professional and voluntary experience
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Connector (vertical line) - hidden on mobile */}
              {index !== experience.length - 1 && (
                <div
                  className={`hidden sm:block absolute left-5 sm:left-6 top-16 sm:top-20 bottom-0 w-1 bg-gradient-to-b ${colorMap[exp.color as keyof typeof colorMap].line} to-transparent`}
                />
              )}

              {/* Card */}
              <div
                className={`border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${colorMap[exp.color as keyof typeof colorMap].bg}`}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Logo Placeholder */}
                  <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                    <img
                      src={exp.image}
                      alt={exp.company || exp.organization || "logo"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                          {exp.position}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 font-semibold">
                          {exp.company || exp.organization}
                        </p>
                      </div>

                      {/* Active Dot Indicator - hidden on mobile to save space */}
                      {!prefersReducedMotion && (
                        <motion.div
                          className="hidden sm:flex flex-col items-center gap-1 flex-shrink-0"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-3 h-3 rounded-full bg-orange-500" />
                        </motion.div>
                      )}
                    </div>

                    {/* Type Badge & Duration */}
                    <div className="mb-3 sm:mb-4 flex flex-wrap gap-2 items-center">
                      <span
                        className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${colorMap[exp.color as keyof typeof colorMap].badge}`}
                      >
                        {exp.type}
                      </span>
                      {exp.duration && (
                        <span className="text-xs sm:text-sm text-gray-600">
                          {exp.duration}
                        </span>
                      )}
                    </div>

                    {/* Description / Responsibilities */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Interested in learning more about my work?
          </p>
          <a
            href="#faq"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
