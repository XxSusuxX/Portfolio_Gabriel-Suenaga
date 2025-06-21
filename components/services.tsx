"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectioninView } from "@/lib/hooks";
import Image from "next/image";

const servicesData = [
  {
    title: "Bots Inteligentes para WhatsApp",
    description:
      "Criação de bots personalizados que automatizam o atendimento ao cliente, envio de mensagens, cobranças, agendamentos e muito mais — direto no WhatsApp da sua empresa, funcionando 24h por dia.",
    icon: "/icons/settings-gears.png",
  },
  {
    title: "Automações de Processos Repetitivos",
    description:
      "Elimino tarefas manuais com automações feitas em Python ou JavaScript. Disparo de boletos, notificações automáticas, integrações com formulários e sistemas externos.",
    icon: "/icons/monitor.png",
  },
  {
    title: "Integração com APIs e Sistemas",
    description:
      "Integro sua automação com APIs de pagamento, CRMs, Google Sheets, e sistemas de envio. Tudo conectado para você não precisar fazer nada manualmente.",
    icon: "/icons/computer.png",
  },
  {
    title: "Dashboards e Painéis Automatizados",
    description:
      "Criação de painéis personalizados para acompanhar interações do bot, pedidos, mensagens e status em tempo real. Visualize tudo em um só lugar, sem complicação.",
    icon: "/icons/server.png",
  },
  {
    title: "Suporte e Ajustes em Sistemas",
    description:
      "Manutenção, melhorias e ajustes em automações já existentes. Suporte técnico contínuo para garantir que tudo funcione de forma fluida, segura e sem travar.",
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