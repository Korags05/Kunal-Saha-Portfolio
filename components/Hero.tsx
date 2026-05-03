'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function Hero() {
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
        staggerChildren: 0.2,
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

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#fde8e4] to-white flex items-center px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      {/* Decorative animated blobs - hidden on mobile */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            className="absolute top-20 left-0 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#E85D3F]/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-0 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-[#E85D3F]/5 rounded-full blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </>
      )}

      <motion.div
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <div className="w-[200px] sm:w-[260px] aspect-[4/5] relative">
            {/* Glow - hidden on mobile */}
            {!prefersReducedMotion && (
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-80 h-80 bg-[#E85D3F] blur-[140px] opacity-40 rounded-full"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </div>
            )}

            {/* Image */}
            <Image
              src="/images/hero_image_portf.png"
              alt="Kunal Saha"
              fill
              priority
              sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, 260px"
              className="rounded-2xl object-cover shadow-xl border border-gray-200"
            />
          </div>

          {/* Tagline UNDER image */}
          <motion.div variants={itemVariants} className="mt-4 sm:mt-6 flex justify-center px-2">
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl
                         bg-white text-gray-800 text-xs sm:text-sm font-medium
                         shadow-[0_6px_0px_#d1d5db,0_10px_20px_rgba(0,0,0,0.15)]"
              whileHover={!prefersReducedMotion ? { scale: 1.05, boxShadow: '0 12px 24px rgba(232, 93, 63, 0.2)' } : {}}
            >
              <span className="text-gray-500">Hello</span>

              <motion.span
                className="bg-[#E85D3F]/10 text-[#E85D3F] px-2 sm:px-3 py-1 rounded-full border border-[#E85D3F]/20 whitespace-nowrap"
                animate={!prefersReducedMotion ? { scale: [1, 1.02, 1], boxShadow: ['0px 0px 0px rgba(232, 93, 63, 0)', '0px 0px 15px rgba(232, 93, 63, 0.2)', '0px 0px 0px rgba(232, 93, 63, 0)'] } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              >
                I'm {personalInfo.name}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT → Content */}
        <div className="text-center md:text-left">
          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            I Build Android & Full-Stack <motion.span
              animate={!prefersReducedMotion ? { color: ['#1f2937', '#E85D3F', '#1f2937'] } : {}}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Stuff
            </motion.span> That Actually Works!
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
          >
            Code, bugs, and late-night coffee keep it running. I turn complex problems into clean, working solutions.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 hover:shadow-lg active:translate-y-[2px]"
              whileHover={!prefersReducedMotion ? { scale: 1.08 } : {}}
              whileTap={!prefersReducedMotion ? { scale: 0.95 } : {}}
            >
              Contact me →
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 sm:gap-6 justify-center md:justify-start text-xs sm:text-sm flex-wrap"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#E85D3F] transition-colors font-medium relative group"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
            >
              GitHub
            </motion.a>

            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#E85D3F] transition-colors font-medium relative group"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 hover:text-[#E85D3F] transition-colors font-medium relative group"
              whileHover={!prefersReducedMotion ? { scale: 1.1 } : {}}
            >
              Email
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}