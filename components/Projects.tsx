'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';
import { projects } from '@/lib/data';

export default function Projects() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

const techColorMap: { [key: string]: string } = {
  // Mobile / Android
  Kotlin: 'bg-purple-100 text-purple-700 border-purple-200',
  Android: 'bg-green-100 text-green-700 border-green-200',
  'Jetpack Compose': 'bg-purple-100 text-purple-700 border-purple-200',
  MVVM: 'bg-indigo-100 text-indigo-700 border-indigo-200',
  'Dagger Hilt': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  RoomDB: 'bg-green-100 text-green-700 border-green-200',

  // Backend
  Java: 'bg-orange-100 text-orange-700 border-orange-200',
  'Spring Boot': 'bg-blue-100 text-blue-700 border-blue-200',
  'REST API': 'bg-blue-100 text-blue-700 border-blue-200',

  // Web
  JavaScript: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  TypeScript: 'bg-blue-100 text-blue-700 border-blue-200',
  React: 'bg-cyan-100 text-cyan-700 border-cyan-200',

  // Databases & Infra
  PostgreSQL: 'bg-sky-100 text-sky-700 border-sky-200',
  Supabase: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Firebase: 'bg-yellow-100 text-yellow-700 border-yellow-200',

  // Cloud / Deployment
  'Cloudflare Pages': 'bg-orange-100 text-orange-700 border-orange-200',

  // Specialized
  'Uber H3': 'bg-rose-100 text-rose-700 border-rose-200',
  AI: 'bg-pink-100 text-pink-700 border-pink-200',

  // Node ecosystem
  'Node.js': 'bg-green-100 text-green-700 border-green-200',
};

  const getTechColor = (tech: string) => {
    return techColorMap[tech] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            My Personal Playground
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
            A collection of projects that showcase my skills and passion
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={!prefersReducedMotion ? { y: -12, boxShadow: '0 30px 60px rgba(232, 93, 63, 0.15)' } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
              className="group rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full border border-[#E85D3F]/10 hover:border-[#E85D3F]/30 relative"
            >
              {/* Gradient overlay on hover */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#E85D3F]/0 to-[#E85D3F]/0 pointer-events-none"
                  animate={{ opacity: [0, 0.1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}

              {/* Project Image */}
              <div className="w-full h-40 sm:h-48 relative overflow-hidden bg-gray-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#E85D3F] to-[#C43A1F] flex items-center justify-center">
                    <span className="text-white text-4xl sm:text-5xl font-bold opacity-30">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                )}
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>

              {/* Card Content */}
              <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
                {/* Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#E85D3F] transition-colors line-clamp-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Status Badge */}
                {project.status === 'upcoming' && (
                  <div className="mb-3 sm:mb-4">
                    <span className="text-xs px-3 py-1 bg-[#E85D3F]/20 text-[#E85D3F] rounded-full border border-[#E85D3F]/40">
                      Coming Soon
                    </span>
                  </div>
                )}

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-gray-700">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-1 rounded-full font-medium border transition-colors ${getTechColor(
                        tech
                      )}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full font-medium bg-gray-700 text-gray-300 border border-gray-600">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Want to see more or discuss a project?
          </p>
          <a
            href="https://github.com/Korags05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300"
          >
            Visit My GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
