"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectioninView } from "@/lib/hooks";
import Image from "next/image";

const servicesData = [
  {
    title: "Automação de Tarefas Web",
    description:
      "Criação de scripts e soluções simples para automatizar tarefas repetitivas em ambientes web, como envio de formulários, integração com APIs e processos que economizam tempo.",
    icon: "/icons/settings-gears.png",
  },
  {
    title: "Interfaces Web Sob Medida",
    description:
      "Desenvolvimento de interfaces personalizadas com foco em usabilidade e performance, utilizando React, Tailwind, Bootstrap e outras ferramentas modernas.",
    icon: "/icons/monitor.png",
  },
  {
    title: "Melhorias e Suporte para Sites",
    description:
      "Ajustes, correções e melhorias em sites existentes. Otimização de performance, SEO básico, organização de código e suporte para manter tudo funcionando bem.",
    icon: "/icons/computer.png",
  },
  {
    title: "Integração com APIs e Dados Externos",
    description:
      "Criação de funcionalidades que consomem APIs externas (REST), exibindo informações dinâmicas em páginas web, como catálogos, dashboards ou listas de conteúdo.",
    icon: "/icons/server.png",
  },
  {
    title: "Sites com WordPress e Suporte Técnico",
    description:
      "Desenvolvimento e manutenção de sites com WordPress, com foco em performance, design personalizado e facilidade de gerenciamento para o cliente.",
    icon: "/icons/services.png",
  },
];

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export default function Services() {
  const { ref } = useSectioninView("Serviços");

  return (
    <section
      ref={ref}
      id="servicos"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Serviços</SectionHeading>
      <p className="text-gray-700 dark:text-white/80 mb-10">
      Desenvolvo soluções personalizadas para automatizar processos e criar sistemas web e desktop eficientes. Com programação, ajudo você a fazer mais em menos tempo, com mais praticidade e menos esforço.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-md dark:bg-gray-800 dark:border-gray-700"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={48} 
              height={48}
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}