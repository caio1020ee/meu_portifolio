export function projetos(container) {
  container.innerHTML = `
    <section id="projetos">
      <header style="text-align: center; margin-bottom: 40px;">
        <h2>Projetos</h2>
        <p>Confira alguns dos projetos que desenvolvi nas áreas de cibersegurança e desenvolvimento web.</p>
      </header>

      <div class="cards">

        <div class="card">
          <img src="./assets/images/projetos/portfolio.png" alt="Portfólio Pessoal" />
          <h3>Portfólio Pessoal</h3>
          <p>
            Site desenvolvido com HTML, CSS e JavaScript puro. Layout responsivo com suporte a temas claro e escuro.
          </p>
        </div>

        <div class="card">
          <img src="./assets/images/projetos/eyewitness.png" alt="EyeWitness Modificado" />
          <h3>EyeWitness Modificado</h3>
          <p>
            Versão personalizada da ferramenta EyeWitness com suporte a STARTTLS, melhorias de automação e coleta de dados críticos.
          </p>
        </div>

        <div class="card">
          <img src="./assets/images/projetos/heartbleed.png" alt="Scanner Heartbleed" />
          <h3>Scanner Heartbleed</h3>
          <p>
            Script adaptado para detectar a falha Heartbleed (CVE-2014-0160), com extração de chaves privadas e varredura em massa.
          </p>
        </div>

        <div class="card">
          <img src="./assets/images/projetos/wordpress-audit.png" alt="Auditoria WordPress" />
          <h3>Auditoria WordPress</h3>
          <p>
            Análise de segurança em sites WordPress, identificando plugins vulneráveis, falhas XSS e cabeçalhos mal configurados.
          </p>
        </div>

      </div>
    </section>
  `;
}
