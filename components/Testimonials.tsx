'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
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

  const boldKeywords = (text: string) => {
    const keywords = [
      'exceptional',
      'remarkable',
      'impressive',
      'invaluable',
      'smooth',
      'excellent',
    ];

    let result = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      result = result.replace(
        regex,
        `<strong class="font-semibold text-gray-900">$&</strong>`
      );
    });

    return result;
  };

  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Background decoration - hidden on mobile */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -top-40 w-64 sm:w-96 h-64 sm:h-96 bg-[#E85D3F]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      )}

      <div className="w-full max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="mb-12 sm:mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What They Said About Me
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
            Words from colleagues and collaborators
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={!prefersReducedMotion ? {
                y: -4,
                boxShadow: '0 12px 24px rgba(232, 93, 63, 0.15)',
              } : {}}
              className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm transition-all duration-300 flex flex-col justify-between hover:border-[#E85D3F]/30 relative group overflow-hidden"
            >
              {/* Animated glow - hidden if prefers reduced motion */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#E85D3F]/0 via-transparent to-[#E85D3F]/0"
                  animate={{ opacity: [0, 0.05, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}

              <div className="relative z-10">
                {/* Quote */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-5xl text-[#E85D3F] leading-none font-serif">
                    "
                  </span>
                </div>

                {/* Text */}
                <p
                  className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 lg:mb-8 flex-grow"
                  dangerouslySetInnerHTML={{
                    __html: boldKeywords(testimonial.testimonial),
                  }}
                />

                {/* Divider */}
                <div className="h-px bg-gray-100 mb-4 sm:mb-6" />

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-[#E85D3F] to-[#C43A1F] flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-md flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 text-xs sm:text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-xs truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-xs truncate">
                      {testimonial.company}
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
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
            Ready to work together?
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