import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaTruckLoading } from "react-icons/fa";
import jornalaborda from "@/public/jornalaborda.png";
import restauranteluffy from "@/public/restaurante-luffy.png";
import clonedisney from "@/public/clonedisney.jpg";
import goodreads from "@/public/goodreads.png";
import todoVue from "@/public/todoVue.png";
import cadastroPhp from "@/public/cadastroPhp.jpeg";
import calculadoraReactNative from "@/public/calculadoraReactNative.jpeg";

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
      "Atuei presencialmente com suporte técnico e auxílio na escolha de soluções de informática. Aprimorei comunicação, empatia e entendimento técnico, essenciais para interfaces e soluções digitais focadas no usuário.",
    icon: React.createElement(LuGraduationCap),
    date: "mar de 2021 - jul de 2021",
  },
  {
    date: "jun de 2023 - set de 2023",
    title: "Auxiliar Carga e descarga",
    location: "Douradina, PR",
    description:
      "Particiapei da descarga de caminhões com eletrodomésticos, organização e realocação no depósito. Desenvolvi agilidade, atenção a detalhes e trabalho em equipe para um fluxo logístico eficiente.",
    icon: React.createElement(FaTruckLoading),
  },
  {
    date: "mai de 2024 - mar de 2025",
    title: "Operador de Espumação (Noturno)",
    location: "Douradina, PR",
    description:
      "Responsável por produção, abastecimento e controle de qualidade na fabricação de colchões. Liderança noturna, organização de tarefas, resolução de imprevistos e otimização do desempenho da equipe.",
    icon: React.createElement(CgWorkAlt),
  },
  {
    date: "mar de 2025 - o momento",
    title: "Desenvolvedor de Software (Freelancer)",
    location: "Remoto",
    description:
      "Crio soluções digitais personalizadas com Front-end moderno (React, Next.js, Vue.js), automação de testes (Selenium, Pytest) e Python para otimização e qualidade de código.",
    icon: React.createElement(FaReact),
  },
] as const;

export const projectsData = [
  {
    title: "Goodreads Scraper",
    description:
      "Programa em Python que coleta citações do Goodreads com interface gráfica, exportação em JSON/CSV e validação de entradas. Demonstra habilidades em automação e manipulação de dados, com foco em usabilidade.",
    tags: ["PYTHON", "SCRAPY", "TKINTER", "AUTOMAÇÃO"],
    imageUrl: goodreads, // Imagem do projeto Goodreads Scraper
    Url: "https://github.com/XxSusuxX/goodreads-scraper",
  },
  {
    title: "Restaurante Chapéu de Palha",
    description:
      "Site temático inspirado em One Piece, com slides interativos, cardápio temático e validação de formulários. Desenvolvido com HTML, CSS e Bootstrap, oferece uma experiência imersiva.",
    tags: ["HTML", "CSS", "Bootstrap", "JQuery"],
    imageUrl: restauranteluffy, // Imagem do projeto Restaurante Chapéu de Palha
    Url: "https://restaurante-luffy.vercel.app",
  },
  {
    title: "Disney Clone",
    description:
      "Clone do site oficial da Disney, recriado com design responsivo e técnicas avançadas de estruturação e otimização de código. Um exercício em organização e escalabilidade.",
    tags: ["HTML", "CSS", "JavaScript", "SCSS", "Uglify"],
    imageUrl: clonedisney, // Imagem do projeto Disney Clone
    Url: "https://clone-disney-ruddy.vercel.app",
  },
  {
    title: "Todo-Vue",
    description:
      "Aplicação de lista de tarefas criada com Vue.js, permitindo adicionar, gerenciar e concluir tarefas de forma eficiente e intuitiva. Um marco no aprendizado de frameworks modernos.",
    tags: ["VUE.JS", "JAVASCRIPT", "HTML", "CSS"],
    imageUrl: todoVue, // Imagem do projeto Todo-Vue
    Url: "https://github.com/XxSusuxX/todo-vue",
  },
  {
    title: "Cadastro-PHP",
    description:
      "Sistema de cadastro com PHP, incluindo login, validação de dados e integração com banco de dados. Focado em segurança e funcionalidade, com interface simples e prática.",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "PHPMyAdmin"],
    imageUrl: cadastroPhp, // Imagem do projeto Cadastro-PHP
    Url: "https://github.com/XxSusuxX/Cadastro-PHP",
  },
  {
    title: "Calculadora React Native",
    description:
      "Calculadora funcional com layout responsivo, desenvolvida em React Native. Fortaleceu habilidades em desenvolvimento mobile e manipulação de eventos.",
    tags: ["REACT NATIVE", "JAVASCRIPT", "EXPO", "ANDROID STUDIO"],
    imageUrl: calculadoraReactNative, // Imagem do projeto Calculadora React Native
    Url: "https://github.com/XxSusuxX/Calculadora-React-Native",
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
  "Gulp.js",
  "Python",
  "Scrapy",
  "Tkinter",
  "Node.js"
  
] as const;
