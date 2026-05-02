'use client';

import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { faqs, personalInfo } from '@/lib/data';

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const accordionVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  const toggleVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
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
            Let's Clear Things Up
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
            Common questions about my work and process
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left Side - Chat Card */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="bg-[#E85D3F]/10 rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#E85D3F]/20 shadow-sm">
              {/* Avatar */}
              <div className="mb-4 sm:mb-6">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-[#E85D3F] to-[#C43A1F] flex items-center justify-center text-white text-lg sm:text-2xl font-bold shadow-lg">
                  KS
                </div>
              </div>

              {/* Message */}
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Got a question? Let's chat.
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-8">
                I'm always happy to discuss projects, answer questions, or just connect. Reach out through your preferred channel!
              </p>

              {/* Buttons */}
              <div className="space-y-2.5 sm:space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="block w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-center text-sm sm:text-base transition-all duration-300 hover:shadow-lg active:translate-y-[2px]"
                >
                  Send me an email
                </a>
                <a
                  href={`https://wa.me/+919957426451`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-center text-sm sm:text-base transition-all duration-300 hover:shadow-lg active:translate-y-[2px]"
                >
                  Text me on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div variants={itemVariants} className="space-y-2.5 sm:space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                layout
              >
                {/* Accordion Header */}
                <motion.button
                  onClick={() =>
                    setOpenId(openId === faq.id ? null : faq.id)
                  }
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <h4 className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base pr-3 sm:pr-4">
                    {faq.question}
                  </h4>

                  {/* Toggle Icon */}
                  <motion.div
                    variants={toggleVariants}
                    animate={openId === faq.id ? 'open' : 'closed'}
                    className="flex-shrink-0"
                  >
                    <span className="text-[#E85D3F] font-bold text-xl sm:text-2xl leading-none">
                      +
                    </span>
                  </motion.div>
                </motion.button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      variants={accordionVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 py-4 sm:py-5 bg-gray-50 border-t border-gray-200">
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
