"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi"
import { FaGithub } from "react-icons/fa";
import { useSectioninView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectioninView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
        <div className="flex items-center justify-center">
            <div className="relative">
               <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
               >
               <Image 
                src="https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY9sFHmnf03z8k3m41SAEB7oY630C3FTw8JNAQFmTV5l97R_4-U0K0vIz_6jpAvkePjJb3NrY3Xd6cXdv9emnqRmNV67bz4J_Q=w1325-h627-rw-v1" 
                alt="Foto perfil de Gabriel Suenaga"
                quality="95"
                priority={true}
                width="192"
                height="192"
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
              <motion.span className="absolute bottom-0 right-0 text-4x1"
                initial={{opacity:0 , scale:0}}
                animate={{opacity:1 , scale: 1}}
                transition={{
                  type: "spring",
                  stiffness: 125,
                  delay: 0.1,
                  duration: 0.7
                }}
              >👋</motion.span>
               </motion.div>
            </div>
        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity:0, y:100 }}
        animate={{ opacity:1, y:0 }}
        >
          <span className="font-bold">Olá, Meu nome é Gabriel Suenaga.</span> Eu sou um{" "}
            <span className="font-bold">Desenvolvedor Front-end</span> {" "} 
            <span className="italic">sites & android</span>.
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
          initial={{opacity:0, y: 100}}
          animate={{opacity:1, y: 0}}
          transition={{
            delay:0.1,
          }}
        >
          <Link href="#contato" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition"
          onClick={() => {
            setActiveSection("Contato")
            setTimeOfLastClick(Date.now())

          }}
          >Contate-me aqui <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/> 
          </Link>

          <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer borderBlack dark:bg-white/10" href="/Curriculo_Gabriel-Suenaga.pdf" download={true}>Instale CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/></a>

          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105
          transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/gabriel-suenaga/" target="_blank">
            <BsLinkedin/>
          </a>
          
          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
          transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://github.com/XxSusuxX" target="_blank">
            <FaGithub/>
          </a>
        </motion.div>
    </section>
  )
}
