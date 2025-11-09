import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  background: string
  image: string
  alternate?: boolean
}

export default function TeamMember({ name, role, background, image, alternate = false }: TeamMemberProps) {
  const alternateVariants = {
    wrapperNormal: 'md:order-1',
    wrapperInverted: 'md:order-2',
    contentNormal: 'md:order-1',
    contentInverted: 'md:order-2',
  };

  const wrapperKey = alternate ? 'wrapperInverted' : 'wrapperNormal';
  const contentKey = alternate ? 'contentNormal' : 'contentInverted';
  const wrapper = alternateVariants[wrapperKey];
  const content = alternateVariants[contentKey];

  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center relative z-50`}>

      {/* Content wrapper */}
      <div className={wrapper}>
        <div
          className={`border-4 border-secondary rounded-2xl overflow-hidden aspect-square relative ${alternate ? "md:order-2" : "md:order-1"}`}
        >
          <Image
            src={image || "/placeholder_lawyer.png"}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text content */}
      <div className={`md:acrylic-glass ${content} md:p-5`}>
        <h3 className="text-3xl md:text-4xl font-bold text-tertiary mb-2">{name}</h3>
        <p className="text-secondary font-semibold mb-4">{role}</p>
        <p className="text-tertiary/80 leading-relaxed text-pretty">{background}</p>
      </div>
    </div>
  )
}
