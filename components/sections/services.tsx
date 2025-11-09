import ServiceCard from "@/components/service-card"

const services = [
  {
    title: "Terceiro Setor",
    description:
      "Assessoria jurídica completa para associações, fundações e organizações sociais, com foco em regularização, governança, captação de recursos e conformidade legal.",
    icon: "🏢",
  },
  {
    title: "Empresarial",
    description:
      "Atuação estratégica na prevenção e resolução de conflitos empresariais, contratos, estrutura societária, compliance e consultoria jurídica contínua para gestão segura e eficiente.",
    icon: "📊",
  },
  {
    title: "Trabalhista e Sindical",
    description:
      "Defesa técnica e consultoria para trabalhadores, empregadores e entidades sindicais, abrangendo gestão de passivos, negociações coletivas, políticas internas e contencioso judicial.",
    icon: "👥",
  },
  {
    title: "Previdenciário",
    description:
      "Orientação e representação em demandas previdenciárias, tanto individuais quanto institucionais, assegurando direitos e adequação às normas do Regime Geral e Próprio de Previdência.",
    icon: "🛡️",
  },
  {
    title: "Cível",
    description:
      "Atuação em demandas cíveis (contratuais, consumidor, família e sucessões), com foco em responsabilidade civil, cobranças, danos, obrigações e mediação de conflitos, sempre priorizando a solução eficiente e estratégica.",
    icon: "⚖️",
  },
  {
    title: "Administrativo",
    description:
      "Assessoria em processos e contratos com a Administração Pública, licitações, convênios, defesas em tomadas de contas e responsabilidade de agentes públicos ou dirigentes de entidades.",
    icon: "📋",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-primary-dark scroll-mt-[50px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-4 text-balance text-center">Nossos Serviços</h2>
        <p className="text-tertiary/70 mb-16 md:text-center">
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
