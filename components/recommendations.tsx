"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectioninView } from "@/lib/hooks";

export default function Recommendations() {
  const { ref } = useSectioninView("Recomendações");
  return (
    <section
      id="recomendacoes"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Recomendações</SectionHeading>
      <div className="space-y-8">
        <blockquote className="recomendacao bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
          <p className="text-gray-700 dark:text-white/80">
            "Gabriel é um aluno determinado, focado e proativo, sempre aberto
            para aprender e motivado por desafios."
          </p>
          <cite className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
            Mariles Carvalho, Consultora de Carreira
          </cite>
        </blockquote>

        <blockquote className="recomendacao bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
          <p className="text-gray-700 dark:text-white/80">
            "Gabriel possui excelentes habilidades técnicas e aprende muito
            rápido. Recomendo-o sem ressalvas."
          </p>
          <cite className="block mt-4 text-sm font-medium text-gray-900 dark:text-white">
            Sergio Melato, Professor
          </cite>
        </blockquote>
      </div>
    </section>
  );
}