"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeaderProps {
  activeSection: string
};

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "services", label: "Serviços" },
    { id: "team", label: "Equipe" },
    { id: "contact", label: "Contato" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-100 transition-all duration-300 ${isScrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="#hero" className="flex items-center gap-2">
          <div className="w-15 h-15 bg-tertiary rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={"/logo.png"}
              alt={'Logo da Sociedade de Advogados Gutierrez, Ribeiro & Mazzetto'}
              className="w-full h-full object-cover"
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>
        </Link>

        <ul className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className={`text-lg font-medium transition-colors ${activeSection === item.id ? "text-secondary" : "text-tertiary/80 hover:text-tertiary"
                  }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="px-6 py-2 bg-secondary text-primary rounded-lg font-medium hover:bg-secondary/90 transition-colors"
        >
          Contato
        </Link>
      </nav>
    </header>
  )
}
