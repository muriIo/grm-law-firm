"use client"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-tertiary mb-4 text-balance">Entre em Contato</h2>
        <p className="text-tertiary/70 mb-16 max-w-2xl">
          Estamos prontos para ajudar você. Entre em contato conosco através de qualquer um dos canais abaixo.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">Telefone</h3>
              <a href="tel:+551133334444" className="text-tertiary/80 hover:text-tertiary transition-colors">
                +55 (11) 3333-4444
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">E-mails</h3>
              <div className="space-y-2">
                <a
                  href="mailto:contato@grm.com.br"
                  className="block text-tertiary/80 hover:text-tertiary transition-colors"
                >
                  contato@grm.com.br
                </a>
                <a
                  href="mailto:comercial@grm.com.br"
                  className="block text-tertiary/80 hover:text-tertiary transition-colors"
                >
                  comercial@grm.com.br
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary mb-4">Sedes</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-tertiary">São Paulo</p>
                  <p className="text-tertiary/80">Av. Paulista, 1578 - Bela Vista</p>
                  <p className="text-tertiary/80">São Paulo, SP - 01311-200</p>
                </div>
                <div>
                  <p className="font-semibold text-tertiary">Rio de Janeiro</p>
                  <p className="text-tertiary/80">Av. Rio Branco, 156 - Centro</p>
                  <p className="text-tertiary/80">Rio de Janeiro, RJ - 20040-020</p>
                </div>
              </div>
            </div>

            <div>
              <a
                href="https://wa.me/?text=Olá! Gostaria de agendar uma consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-secondary text-primary rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Enviar Mensagem WhatsApp
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
