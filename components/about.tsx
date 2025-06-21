"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectioninView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectioninView("Sobre")

  return (
    <motion.section 
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.175}}
        id="sobre"
    >
        <SectionHeading>Sobre mim</SectionHeading>

<p className="mb-3">
    Sou fundador da <span className="font-medium">Suenaga Automações</span>, um projeto focado em criar <span className="font-medium">bots inteligentes, automações com IA</span> e soluções digitais que ajudam empresas a vender mais com menos esforço.
</p>
<p className="mb-3">
    Minha formação como melhor aluno em <span className="font-medium">Desenvolvimento de Sistemas</span> me deu uma base sólida em programação e tecnologia. Desde então, venho aprimorando minhas habilidades em <span className="font-medium">Python, APIs, Web Scraping</span> e <span className="font-medium">automação de processos com WhatsApp</span>.
</p>
<p className="mb-3">
    Também desenvolvo <span className="font-medium">interfaces personalizadas com React e WordPress</span>, integradas a sistemas automatizados de atendimento, disparo de mensagens, envio de boletos e muito mais.
</p>
<p>
    Se você quer automatizar processos no seu negócio ou colocar um robô pra trabalhar por você, entre em contato. Veja meus projetos abaixo.
</p>

    </motion.section>
  )
}
