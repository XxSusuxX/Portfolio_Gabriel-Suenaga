"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectioninView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial:{
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        },
    }),
}

export default function Skills() {
    const { ref } = useSectioninView("Habilidades")

  return (
    <section
      ref={ref}
      id="habilidades"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Minhas Skills</SectionHeading>
      <div className="space-y-10">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {skills.map((skill, index) => (
                <motion.li
                  className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-md dark:bg-gray-800 dark:text-white/80 dark:border-gray-700"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
