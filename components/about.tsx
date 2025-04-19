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
    Apaixonado por tecnologia desde cedo, iniciei minha jornada focando em <span className="font-medium">Front-End</span> e evoluí como Desenvolvedor de Software, com interesse em <span className="font-medium">Testes e Automações</span>. A lógica e a busca por soluções inteligentes me motivam.
</p>
<p className="mb-3">
    Minha formação como melhor aluno em <span className="font-medium">Desenvolvimento de Sistemas</span> me deu uma base sólida em diversas tecnologias. Atualmente, aprofundo minhas habilidades em <span className="font-medium">React, TypeScript, JavaScript</span> e <span className="font-medium">Testes Automatizados</span>, buscando sempre entregas de alta qualidade e performance.
</p>
<p className="mb-3">
    Além do desenvolvimento <span className="font-medium">Front-End</span>, crio <span className="font-medium">automações com Python</span> e <span className="font-medium">Node.js</span> para otimizar processos. Busco desafios que impulsionem meu crescimento e me permitam contribuir em equipes de tecnologia.
</p>
<p>
    Se você tem um projeto web, precisa de testes eficientes ou soluções de automação, entre em contato! Veja meus projetos abaixo.
</p>

    </motion.section>
  )
}
