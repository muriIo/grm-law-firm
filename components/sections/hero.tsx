import Link from "next/link"

export default function Hero() {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber como vocês podem me ajudar.")
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-tertiary mb-6 text-balance">
          Gutierrez, Ribeiro & Mazzetto
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-4 font-medium">Sociedade de Advogados</p>
        <p className="text-lg md:text-xl text-tertiary/80 mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
          Consultoria jurídica especializada em direito empresarial, trabalhista, administrativo e previdenciário.
          Comprometidos com excelência e inovação.
        </p>

        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors acrylic-glass"
        >
          Como podemos ajudar?
        </Link>
      </div>
    </section>
  )
}
