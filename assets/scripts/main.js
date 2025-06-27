import { desafios } from "./desafios.js";
import { projetos } from "./projetos.js";

// Elementos principais
const projectsWrapper = document.querySelector("#conteudo");
const toggle = document.querySelector("#sw-checkbox");
const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");

const notebooks = [
  document.querySelector("#notebook-1"),
  document.querySelector("#notebook-2"),
  document.querySelector("#notebook-2-white"),
  document.querySelector("#vidro"),
];

const sections = ["about", "projects", "knowledge", "contact"];

// Ativa menu da seção visível
function activateMenuAtCurrentSection(id) {
  const section = document.querySelector(`#${id}`);
  if (!section) return;

  const targetLine = scrollY + innerHeight / 2;
  const start = section.offsetTop;
  const end = start + section.offsetHeight;

  const isActive = targetLine >= start && targetLine < end;
  const link = document.querySelector(`.menu a[href*=${id}]`);

  if (link) link.classList.toggle("active", isActive);
}

// Scroll
function onScroll() {
  navigation?.classList.toggle("scroll", scrollY > 0);
  backToTopButton?.classList.toggle("show", scrollY > 550);

  sections.forEach(activateMenuAtCurrentSection);
}

// Menu mobile
function setupMenuToggle() {
  document.querySelectorAll(".open").forEach((btn) =>
    btn.addEventListener("click", () =>
      document.body.classList.add("menu-expanded")
    )
  );

  document.querySelectorAll(".close").forEach((btn) =>
    btn.addEventListener("click", () =>
      document.body.classList.remove("menu-expanded")
    )
  );
}

// Navegação
function setupNavigation() {
  // Sobre
  document.querySelector("#link-sobre")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  });

  // Projetos
  document.querySelector("#link-projetos")?.addEventListener("click", (e) => {
    e.preventDefault();
    projetos(projectsWrapper);
    setupDesafioBtn(); // Garante que o botão "Desafio" funcione
  });

  // Desafios
  setupDesafioBtn();
}

// Botão de desafio
function setupDesafioBtn() {
  const btn = document.querySelector("#link-desafios");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    desafios(projectsWrapper);
    setupBackToProjectsBtn();
  });
}

// Botão "Voltar aos Projetos"
function setupBackToProjectsBtn() {
  setTimeout(() => {
    const backBtn = document.querySelector("#backToProjectsBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        projetos(projectsWrapper);
        setupDesafioBtn(); // reatribui evento ao botão de desafio
      });
    }
  }, 100);
}

// Inicialização
window.addEventListener("load", () => {
  projetos(projectsWrapper);      // Carrega projetos como padrão
  setupNavigation();              // Define os botões
  setupMenuToggle();             // Habilita menu
  setTimeout(() => {
    notebooks.forEach((el) => {
      if (el) {
        el.style.animation = "none";
        el.style.opacity = 0;
      }
    });
  }, 4000);
});

window.addEventListener("scroll", onScroll);

// Modo claro
toggle?.addEventListener("change", () =>
  document.body.classList.toggle("light-mode")
);

// ScrollReveal
ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `
  #home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledge header,
  #knowledge .card,
  #contact,
  #contact header`
);
