export function desafios(container) {
  container.innerHTML = `
    <section id="desafios">
      <header style="text-align: center; margin-bottom: 40px;">
        <h2>Desafios de Cibersegurança</h2>
        <p>Explore desafios técnicos reais enfrentados durante testes de segurança.</p>
      </header>

      <div class="cards">

        <div class="card">
          <img src="./assets/images/desafios/xss.png" alt="Desafio XSS" />
          <h3>Desafio XSS</h3>
          <p>
            Exploração de Cross-Site Scripting persistente e refletido em aplicações reais usando payloads customizados.
          </p>
        </div>

        <div class="card">
          <img src="./assets/images/desafios/heartbleed.png" alt="Heartbleed" />
          <h3>Heartbleed Exploit</h3>
          <p>
            Exploração prática da falha Heartbleed (CVE-2014-0160) com extração de dados da memória e análise de segurança em servidores TLS.
          </p>
        </div>

        <div class="card">
          <img src="./assets/images/desafios/sqli.png" alt="SQL Injection" />
          <h3>SQL Injection</h3>
          <p>
            Desafio com uso de injeção SQL para acessar dados sensíveis, com identificação do SGBD e escalonamento da exploração.
          </p>
        </div>

        <div class="card">
          <img src="./assets/images/desafios/wordpress.png" alt="Scan WordPress" />
          <h3>Scan WordPress</h3>
          <p>
            Automatização de testes em WordPress para descobrir plugins vulneráveis e brechas de segurança comuns.
          </p>
        </div>

      </div>

      <div style="text-align: center; margin-top: 40px;">
        <button id="backToProjectsBtn" class="button">← Voltar aos Projetos</button>
      </div>
    </section>
  `;
}
