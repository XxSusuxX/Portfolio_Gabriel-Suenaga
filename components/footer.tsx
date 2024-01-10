import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
        <small className="mb-2 block text-xs">
            &copy; 2024 Gabriel Suenaga. Todos os direitos reservados.
        </small>
        <p className="text-xs">
            <span className="font-semibold">Sobre este site:</span> construído com React e Next.js (Roteador de aplicativo e ações de servidor), TypeScript, Tailwind CSS, Framer Motion, React Email & Redend, Vercel hosting.
        </p>
    </footer>
  )
}
