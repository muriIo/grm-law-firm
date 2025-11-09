import Link from "next/link"
import ChevronsDown, { LucideChevronsDown } from "lucide-react";

export default function Hero() {
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de iniciar um atendimento.")
  const whatsappLink = `https://wa.me/5515997304482?text=${whatsappMessage}`

  return (
    <section id="hero" className="md:min-h-screen flex items-start md:items-center justify-center pt-36 md:pt-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative flex flex-col items-center gap-10 z-10 max-w-5xl mx-auto text-center rounded-xl bg-tertiary/10 px-2 py-4 md:p-10">
        <div>
          <h1 className="text-[20px] md:text-5xl font-bold text-secondary text-balance underline">
            Gutierrez, Ribeiro & Mazzetto
          </h1>
          <p className="text-[14px] md:text-xl text-secondary font-medium">SOCIEDADE DE ADVOGADOS</p>
        </div>
        <div>
          <p className="text-4xl md:text-3xl text-tertiary/80 mx-auto leading-none text-pretty">
            Segurança jurídica para quem transforma desafios em resultados.
          </p>
          <p className="text-lg md:text-xl text-tertiary/80 max-w-2xl mx-auto leading-none text-pretty mt-6">
            Com atuação técnica e visão estratégica, assessoramos empresas e organizações que inovam, crescem e constroem o amanhã com responsabilidade.
          </p>
        </div>

        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit px-8 py-4 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
        >
          Como podemos ajudar?
        </Link>
      </div>

      <div className="hidden md:block md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-8 md:animate-bounce">
        <LucideChevronsDown size={70} />
      </div>
    </section>
  )
}
