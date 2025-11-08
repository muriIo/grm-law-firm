export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full h-80 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl flex items-center justify-center border-2 border-secondary/20">
              <svg className="w-48 h-48 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6v6m0 0v6m0-6h6m0 0h6m-6-6H6m0 0H0"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-8 text-balance">Sobre Nós</h2>
            </div>

            <div className="space-y-4 text-tertiary/90 leading-relaxed">
              <p>
                Fundada em 2010, a Gutierrez, Ribeiro & Mazzetto é uma sociedade de advogados dedicada ao fornecimento
                de consultoria jurídica de alta qualidade. Com mais de uma década de experiência, consolidamos nossa
                reputação como parceiros confiáveis de empresas e indivíduos.
              </p>

              <p>
                Nossa equipe é composta por profissionais qualificados, com especialização em diversas áreas do direito.
                Combinamos conhecimento técnico profundo com uma abordagem prática e inovadora na resolução de questões
                jurídicas complexas.
              </p>

              <p>
                Acreditamos que a excelência jurídica vai além da simples conformidade com a lei. Buscamos entender
                completamente os objetivos de nossos clientes para fornecer soluções estratégicas e customizadas.
              </p>

              <p>
                Nos posicionamos como consultores de confiança, oferecendo orientação clara e transparente em todas as
                fases de um processo jurídico, desde a prevenção até a litigação.
              </p>

              <p>
                Nossa missão é ser o escritório de advocacia preferido pela qualidade de nossas análises jurídicas, pela
                eficiência em nossas operações e pelo comprometimento com o sucesso de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
