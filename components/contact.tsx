"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectioninView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectioninView("Contato")


  return (
    <motion.section
    id="contato"
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1
    }}
    viewport={{
      once: true
    }}
    >
        <SectionHeading>Entre em Contato</SectionHeading>
        <p className="text-gray-700 -mt-6 dark:text-white/80">Por favor contate-me diretamente por email <a className="underline" href="mailto:gabriel.hneus@gmail.com">gabriel.hneus@gmail.com</a> ou pelo formulario a abaixo</p>

        <form className="mt-10 flex flex-col dark:text-black/80" action={async (formData) => {
          const { data, error } = await sendEmail(formData)

          if (error){
            toast.error(error)
            return
          }

          toast.success("email enviado com sucesso!")
        }}>
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Seu email"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Sua mensagem"
            required
            maxLength={500}
          />
          <SubmitBtn/>
        </form>
    </motion.section>
  )
}
