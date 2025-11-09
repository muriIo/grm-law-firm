import TeamMember from "@/components/team-member"

const teamMembers = [
  {
    name: "Diego Gutierrez",
    role: "Sócio-Fundador",
    background: "Advogado. Pós-Graduado em Direito Empresarial pela FGV e Pós Graduado em Direito Administrativo pela Mackenzie.",
    image: "/diego.jpeg",
  },
  {
    name: "Vinicius Ribeiro",
    role: "Sócio-Fundador",
    background: "Professor e Advogado. Mestre em Estudos da Condição Humana pela UFSCAR com Extensão Universitária pela Faculdade de Direito da Universidade de Coimbra-PT.",
    image: "/vinicius.jpeg",
  },
  {
    name: "Rafael Mazzetto",
    role: "Sócio-Majoritário",
    background: "Professor e Advogado. Pós-Graduado em Direito Civil pela Escola Paulista de Direito.",
    image: "/mazzeto.jpeg",
  },
  {
    name: "Alex Quearizzi",
    role: "Advogado Associado",
    background: "Advogado. Pós-Graduado em Direito Contratual pelo Damásio e Pós-Graduado em Direito Civil pela Escola Paulista de Direito.",
    image: "/alex.jpeg",
  },
  {
    name: "Jean Siqueira",
    role: "Estagiário",
    background: "Estudante de Direito.",
    image: "/jean.jpeg",
  },
]

export default function Team() {
  return (
    <section id="team" className="py-20 px-6 bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-4 text-balance text-center">Nosso Time</h2>
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
