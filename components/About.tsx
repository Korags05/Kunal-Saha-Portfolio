'use client';

import { motion, Variants } from 'framer-motion';
import Image from "next/image";
import { useEffect, useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function About() {
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

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Decorative background elements - hidden on mobile */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute -top-40 -right-40 w-56 sm:w-80 h-56 sm:h-80 bg-[#E85D3F]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      )}
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Image */}
          <motion.div variants={imageVariants} className="flex justify-center md:justify-start">
            <div className="w-full max-w-xs md:max-w-full aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/kunal_laptop.png"
                alt="Kunal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={containerVariants} className="space-y-4 sm:space-y-6">
            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
            >
              A Bit About Me<br />
              <span className="text-[#E85D3F]">(& My Code)</span>
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
            >
              I'm an Android and Full Stack Developer with a passion for building scalable, user-centric solutions. My journey has been driven by a love for healthcare technology—creating apps that actually make a difference in underserved communities. With expertise in Kotlin, Jetpack Compose, and Spring Boot, I focus on crafting elegant architectures that solve real problems.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
            >
              Currently, I'm diving deep into Microservices and DevOps to build more resilient systems. I believe in clean code, thoughtful design, and the importance of understanding both the frontend and backend. Whether it's optimizing a Compose UI or architecting a scalable backend service, I approach every challenge with curiosity and precision.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:shadow-lg active:translate-y-[2px]"
              >
                Contact me →
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
