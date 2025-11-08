import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse em saber mais sobre ${title}.`)
  const whatsappLink = `https://wa.me/?text=${whatsappMessage}`

  return (
    <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary/50 transition-colors group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-tertiary mb-3">{title}</h3>
      <p className="text-tertiary/70 mb-6 leading-relaxed">{description}</p>
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-secondary font-medium hover:text-secondary/80 transition-colors"
      >
        Saiba mais →
      </Link>
    </div>
  )
}
