"use client"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-14 px-6 bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-4 text-balance text-center">Entre em Contato</h2>
        <p className="text-tertiary/70 mb-16 max-w-2xl">
          Estamos prontos para ajudar você. Entre em contato conosco através de qualquer um dos canais abaixo.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">Telefone</h3>
              <a href="tel:+5515997304482" className="text-tertiary/80 hover:text-tertiary transition-colors">
                +55 (15) 99730-4482
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">E-mails</h3>
              <div className="space-y-2">
                <a
                  href="mailto:diegogutierrez@adv.oabsp.org.br"
                  className="block text-tertiary/80 hover:text-tertiary transition-colors"
                >
                  diegogutierrez@adv.oabsp.org.br
                </a>
                <a
                  href="mailto:ribeiro.vinicius@adv.oabsp.org.br"
                  className="block text-tertiary/80 hover:text-tertiary transition-colors"
                >
                  ribeiro.vinicius@adv.oabsp.org.br
                </a>
                <a
                  href="mailto:rmazzetto@adv.oabsp.org.br"
                  className="block text-tertiary/80 hover:text-tertiary transition-colors"
                >
                  rmazzetto@adv.oabsp.org.br
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">Sedes</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-tertiary">Sorocaba</p>
                  <p className="text-tertiary/80">Rua Paes de Linhares, 447 - Vila Fiori</p>
                  <p className="text-tertiary/80">Sorocaba, SP - 18075-630</p>
                </div>
                <div>
                  <p className="font-semibold text-tertiary">Salto de Pirapora</p>
                  <p className="text-tertiary/80">Rua Francisco de Barros Leite, 110, 2º andar - Centro</p>
                  <p className="text-tertiary/80">Salto de Pirapora, SP - 18160-000</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/5515997304482?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Enviar Mensagem no WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
