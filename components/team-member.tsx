import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  background: string
  image: string
  alternate?: boolean
}

export default function TeamMember({ name, role, background, image, alternate = false }: TeamMemberProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center relative`}>
      {/* Zigzag background decoration */}
      <div className="absolute -z-10 left-0 top-1/2 -translate-y-1/2 w-64 h-48 bg-secondary/5 rounded-3xl blur-2xl"></div>

      {/* Content wrapper */}
      <div className={`order-${alternate ? "2" : "1"}`}>
        <div
          className={`border-4 border-secondary rounded-2xl overflow-hidden aspect-square relative ${alternate ? "md:order-2" : "md:order-1"}`}
        >
          <Image
            src={image || "/placeholder.jpg"}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text content */}
      <div className={`order-${alternate ? "1" : "2"}`}>
        <h3 className="text-3xl md:text-4xl font-bold text-tertiary mb-2">{name}</h3>
        <p className="text-secondary font-semibold mb-4">{role}</p>
        <p className="text-tertiary/80 leading-relaxed text-pretty">{background}</p>
      </div>
    </div>
  )
}
