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
                <a href="tel:+551133334444" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  +55 (11) 3333-4444
                </a>
              </li>
              <li>
                <a href="mailto:contato@grm.com.br" className="text-tertiary/70 hover:text-tertiary transition-colors">
                  contato@grm.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-tertiary font-semibold mb-4">Localização</h3>
            <p className="text-tertiary/70 text-sm">
              São Paulo, SP
              <br />
              Rio de Janeiro, RJ
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tertiary/60 text-sm">
            &copy; 2025 Gutierrez, Ribeiro & Mazzetto. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-tertiary/60 hover:text-tertiary text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-tertiary/60 hover:text-tertiary text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
