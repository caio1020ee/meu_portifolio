import { desafios } from "./desafios.js";
import { projetos } from "./projetos.js";

// Elementos
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

// Menu
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

// Trocar entre projetos e desafios
function setupDesafioBtn() {
  const btn = document.querySelector("#desafio");
  if (!btn) return;

  btn.addEventListener("click", () => {
    desafios(projectsWrapper);
    setTimeout(() => {
      document
        .querySelector("#backToProjectsBtn")
        ?.addEventListener("click", () => {
          projetos(projectsWrapper);
          setupDesafioBtn();
        });
    }, 100);
  });
}

// Menu navegação dinâmica
function setupNavLinks() {
  document.querySelector("#link-projetos")?.addEventListener("click", (e) => {
    e.preventDefault();
    projetos(projectsWrapper);
    setupDesafioBtn();
  });

  document.querySelector("#link-desafios")?.addEventListener("click", (e) => {
    e.preventDefault();
    desafios(projectsWrapper);
  });

  document.querySelector("#link-sobre")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  });
}

// Inicialização
window.addEventListener("load", () => {
  projetos(projectsWrapper);
  setupDesafioBtn();
  setupNavLinks();
  setupMenuToggle();

  // Animações iniciais
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

// Scroll reveal
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
