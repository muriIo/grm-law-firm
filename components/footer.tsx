export default function Footer() {
  return (
    <footer className="bg-primary/50 border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-tertiary font-semibold mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#team" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  Nosso Time
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-tertiary font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#services" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  Litígio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-tertiary font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+5515997304482" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  +55 (15) 99730-4482
                </a>
              </li>
              <li>
                <a href="mailto:diegogutierrez@adv.oabsp.org.br" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  diegogutierrez@adv.oabsp.org.br
                </a>
              </li>
              <li>
                <a href="mailto:ribeiro.vinicius@adv.oabsp.org.br" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  ribeiro.vinicius@adv.oabsp.org.br
                </a>
              </li>
              <li>
                <a href="mailto:rmazzetto@adv.oabsp.org.br" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  rmazzetto@adv.oabsp.org.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-tertiary font-semibold mb-4">Localização</h3>
            <p className="text-tertiary/70 text-sm">
              Sorocaba, SP
              <br />
              Salto de Pirapora, SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
