import ServiceCard from "@/components/service-card"

const services = [
  {
    title: "Setor Terciário",
    description:
      "Consultoria especializada para empresas do setor de serviços, comércio e turismo. Orientação em contratos comerciais e conformidade regulatória.",
    icon: "🏢",
  },
  {
    title: "Direito Empresarial",
    description:
      "Suporte completo em constituição de empresas, fusões e aquisições, reorganizações societárias e compliance corporativo.",
    icon: "📊",
  },
  {
    title: "Direito Trabalhista",
    description:
      "Consultoria em relações trabalhistas, contratação, demissão, sindicatos e negociação coletiva com expertise total.",
    icon: "👥",
  },
  {
    title: "Direito Previdenciário",
    description:
      "Assessoria completa em questões de seguridade social, benefícios previdenciários e planejamento de proteção social.",
    icon: "🛡️",
  },
  {
    title: "Direito Civil",
    description:
      "Representação em litígios civis, resolução de conflitos, contratos e questões de responsabilidade civil.",
    icon: "⚖️",
  },
  {
    title: "Direito Administrativo",
    description:
      "Consultoria em temas administrativos, licitações públicas, contratos administrativos e relacionamento com entes públicos.",
    icon: "📋",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-4 text-balance">Nossos Serviços</h2>
        <p className="text-tertiary/70 mb-16 max-w-2xl">
          Oferecemos uma ampla gama de serviços jurídicos especializados para atender às necessidades de nossos
          clientes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
