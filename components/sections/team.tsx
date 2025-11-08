import TeamMember from "@/components/team-member"

const teamMembers = [
  {
    name: "Thais Barros Beldi",
    role: "Sócia-Diretora",
    background: "Formada em Administração, MBA em Gestão. Especialista em estratégia e inovação jurídica.",
    image: "/placeholder.jpg?key=b5wsh",
  },
  {
    name: "Carlos Gutierrez",
    role: "Sócio-Fundador",
    background: "Bacharel em Direito pela USP, especialista em Direito Empresarial com 20 anos de experiência.",
    image: "/placeholder.jpg?key=mw2si",
  },
  {
    name: "Marina Ribeiro",
    role: "Sócia",
    background: "Doutora em Direito do Trabalho, especialista em relações trabalhistas e negociação coletiva.",
    image: "/placeholder.jpg?key=wfvli",
  },
  {
    name: "Roberto Mazzetto",
    role: "Sócio",
    background: "Especialista em Direito Administrativo e Previdenciário com experiência em licitações públicas.",
    image: "/placeholder.jpg?key=200rg",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-4 text-balance">Nosso Time</h2>
        <p className="text-tertiary/70 mb-16 max-w-2xl">
          Conheça os profissionais experientes que compõem nossa equipe.
        </p>

        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} alternate={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
