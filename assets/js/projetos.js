function projetos(section) {
  section.innerHTML = `
    <header>
      <h2>Projetos</h2>
    </header>
    <div class="content">
      <div class="cards">
        <!-- Cartões de projeto -->
        ${createCard({
          title: "Orange Evolution",
          image: "orange-evolution.gif",
          alt: "GIF do projeto Orange Evolution.",
          repo: "https://github.com/squad-30/OrangeEvolution-Squad30",
          live: "https://orangeevolution-squad30.up.railway.app",
          description: "Plataforma de estudos desenvolvida na Hackathon do Programa de Formação 4 da FCamara.",
          stack: "HTML - CSS - JS - NodeJS - Express - SQLite"
        })}
        ${createCard({
          title: "Desafio 21 dias de código",
          image: "desafio-de-codigo.jpg",
          alt: "Imagem tema do projeto de desafio de código.",
          repo: "https://github.com/lucyanovidio/desafio-21-dias-codigo-rocketseat",
          live: "#projects",
          id: "desafio",
          description: "Desafio promovido pela Rocketseat com 21 projetos diferentes.",
          stack: "HTML - CSS - JS"
        })}
        ${createCard({
          title: "Nutricionista Roberto - Links",
          image: "roberto-links.gif",
          alt: "Imagem do projeto.",
          repo: "https://github.com/lucyanovidio/robertoovidionutri-bio",
          live: "https://robertoovidionutri-bio.vercel.app",
          description: "Páginas de links desenvolvida para cliente.",
          stack: "HTML - CSS - JS"
        })}
        ${createCard({
          title: "Nutricionista Roberto - Página de consulta",
          image: "roberto-consulta.gif",
          alt: "Imagem do projeto.",
          repo: "https://github.com/lucyanovidio/robertoovidionutri-consulta",
          live: "https://robertoovidionutri-consulta.vercel.app",
          description: "Página de contato para consultas desenvolvida para cliente.",
          stack: "HTML - CSS - JS"
        })}
        ${createCard({
          title: "Doctor Care",
          image: "doctorcare.gif",
          alt: "Imagem do projeto.",
          repo: "https://github.com/lucyanovidio/doctorcare",
          live: "https://lucyanovidio.github.io/doctorcare/",
          description: "Projeto de site desenvolvido na Next Level Week Return da Rocketseat.",
          stack: "HTML - CSS - JS"
        })}
        ${createCard({
          title: "Meu Portifólio",
          image: "portifolio.gif",
          alt: "Imagem do projeto.",
          repo: "https://github.com/lucyanovidio/portifolio",
          live: "https://lucyanovidio.vercel.app",
          description: "O presente site que desenvolvi para apresentar a mim e meus projetos.",
          stack: "HTML - CSS - JS"
        })}
        <div class="card">
          <h3>Em breve...</h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(255,255,255,1)"/></svg>
          <p>Aprendizado constante! <br /> Em breve muitos outros projetos.</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M21 3v2c0 9.627-5.373 14-12 14H5.243C5.08 19.912 5 20.907 5 22H3c0-1.363.116-2.6.346-3.732C3.116 16.974 3 15.218 3 13 3 7.477 7.477 3 13 3c2 0 4 1 8 0z" fill="rgba(255,255,255,1)"/></svg>
        </div>
      </div>
    </div>
  `;
}

// Função auxiliar para gerar HTML dos cards dinamicamente
function createCard({ title, image, alt, repo, live, description, stack, id = "" }) {
  return `
    <div class="card">
      <h3>${title}</h3>
      <div class="img-wrapper">
        <img src="./assets/images/projects/${image}" alt="${alt}" />
        <div class="buttons">
          <a href="${repo}" target="_blank" title="Repositório no Github">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.475 2 2 6.475 2 12a10 10 0 0 0 6.838 9.488c.5.087.687-.213.687-.476v-1.862c-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85v2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z" fill="rgba(255,255,255,1)"/></svg>
          </a>
          <a href="${live}" target="_blank" title="Ver Projeto" ${id ? `id="${id}"` : ""}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c5.392 0 9.878 3.88 10.819 9C21.878 17.12 17.392 21 12 21S2.122 17.12 1.181 12C2.122 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7A9.005 9.005 0 0 0 3.223 12 9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>
          </a>
        </div>
      </div>
      <p>${description}</p>
      <p>${stack}</p>
    </div>
  `;
}

export { projetos };
