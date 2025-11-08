"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Team from "@/components/sections/team"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "team", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);

            break;
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-primary">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
