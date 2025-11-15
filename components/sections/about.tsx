import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-primary scroll-mt-[50px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center h-[200px] md:h-auto">
            <Image
              src={"/logomarca.png"}
              alt={'Logomarca da Sociedade de Advogados Gutierrez, Ribeiro & Mazzetto'}
              className="w-full h-full object-contain"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-8 text-balance text-center">Sobre Nós</h2>
            </div>

            <div className="space-y-4 text-tertiary/90 leading-relaxed text-justify">
              <p>
                Nossa história é feita de conhecimento, união e compromisso.
              </p>

              <p>
                Em fevereiro de 2020, teve início a trajetória que daria origem ao atual escritório Gutierrez, Ribeiro & Mazzetto - Sociedade de Advogados.
                Naquele momento, os então estudantes de Direito Diego Gutierrez e Vinicius Ribeiro, fundadores da Academia de Direito de Sorocaba,
                iniciaram uma parceria profissional com o advogado Osvaldo Lemes.
              </p>

              <p>
                Em 2023, já formados, Diego e Vinicius constituíram formalmente o escritório Gutierrez & Ribeiro – Sociedade de Advogados,
                consolidando a experiência adquirida nos anos anteriores e ampliando sua atuação jurídica.
              </p>

              <p>
                No ano de 2024, o também fundador da Academia de Direito, Rafael Mazzetto, passou a integrar a sociedade, que passou a se denominar
                Gutierrez, Ribeiro & Mazzetto – Sociedade de Advogados.
              </p>

              <p>
                Por fim, em 2025, o advogado Alex Quearizzi, igualmente fundador da Academia de Direito de Sorocaba, passou a integrar a equipe,
                fortalecendo o corpo jurídico e ampliando as áreas de atuação do escritório.
              </p>

              <p>
                Desde sua origem, o Gutierrez, Ribeiro & Mazzetto - Sociedade de Advogados mantém o compromisso com a excelência técnica, a ética profissional
                e a dedicação integral aos interesses de seus clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
