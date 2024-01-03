"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.175}}
    >
        <SectionHeading>Sobre mim</SectionHeading>
        <p className='mb-3'>
            A paixão pelo{" "}<span className='font-medium'>Front End</span> floresceu durante meus estudos. Atualmente, concluo meu{" "}<span className='font-medium'>curso profissionalizante na EBAC</span>, aprimorando minhas habilidades.{" "}<span className='underline'>Desenvolvi mais de 14 projetos</span>, evidenciando minha dedicação na área.
        </p>
        <p>
        Fora do mundo da programação, sou{" "}<span className='italic'>apaixonado por jogos e desenhos (artísticos)</span>, encontrando neles uma{" "}<span className='underline'>válvula de escape criativa.</span>{" "}<span className='font-medium'>Também adoro sair com amigos</span>, explorando a vida social e mantendo um equilíbrio entre a paixão pelo código e momentos descontraídos. Estou animado para oportunidade como{" "}<span className='italic'>Desenvolvedor Front End</span>,{" "}<span className='font-medium'>confiante em contribuir com habilidades técnicas e uma mentalidade colaborativa.</span> Ansioso para enfrentar novos desafios e continuar crescendo no universo do desenvolvimento web.
        </p>
    </motion.section>
  )
}
