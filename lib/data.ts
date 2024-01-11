import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import jornalaborda from "@/public/jornalaborda.png";
import restauranteluffy from "@/public/restaurante-luffy.png";
import clonedisney from "@/public/clonedisney.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
]as const;

export const experiencesData = [
  {
    title: "Atendente Loja TI",
    location: "Douradina, PR",
    description:
      "Atendente em TI com sólida comunicação, resolução de problemas e conhecimento técnico. Transfiro essas habilidades para desenvolvimento front-end, garantindo interfaces eficientes e centradas no usuário.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    date: "2023 - Até o momento",
    title: "Freelancer Front-End",
    location: "Home office",
    description:
      "Como freelancer, dedico-me há mais de um ano à criação de projetos fictícios para empresas. Demonstro habilidades sólidas em desenvolvimento front-end, proporcionando soluções inovadoras e personalizadas.",
    icon: React.createElement(FaReact),
  },
  {
    date: "2022 - Até o momento",
    title: "Desenvolvedor Front-End",
    location: "Osasco, SP",
    description:
      "Iniciei o trabalho voluntário há 3 meses, focando em soluções digitais para o desenvolvimento educacional. Minhas competências inclui Wordpress, PHP, Scrum, Web Design, Desenvolvimento Web.",
    icon: React.createElement(CgWorkAlt),
  },
] as const;

export const projectsData = [
  {
    title: "Jornal Aborda",
    description:
    "Desenvolvedor Front-end voluntário em um jornal local. Otimizo layouts, aprimoro experiência do usuário e colaboro com equipe da ONG.",
    tags: ["WordPress", "PHP", "HTML", "Web Design"],
    imageUrl: jornalaborda,
    Url: "https://jornalaborda.com.br"
  },
  {
    title: "Restaurande Luffy",
    description:
      'Destaco habilidades em design temático, interatividade, e validação de formulários. Experiência imersiva, ênfase em cardápio temáticoe e eventos especiais.',
    tags: ["HTML", "CSS", "Bootstrap", "JQuery"],
    imageUrl: restauranteluffy,
    Url: "https://restaurante-luffy.vercel.app"
  },
  {
    title: "Disney",
    description:
      'Durante o curso "Profissão: Engenheiro Front-end" pela EBAC, repliquei o site oficial da Disney. com foco em design e estruturação avançada.',
    tags: ["Html", "Css", "JavaScript", "Scss", "Uglify"],
    imageUrl: clonedisney,
    Url: "https://clone-disney-ruddy.vercel.app"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Hooks",
  "React Native",
  "Next.js",
  "Git/Github",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
  "WordPress",
  "PHP",
  "Vite",
  "Vue.js",
  "JQuery",
  "ESLint",
  "Ajax",
  "Sass",
  "Grunt.js",
  "Gulp.js"
  
] as const;