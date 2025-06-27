import { desafios } from "./desafios.js";
import { projetos } from "./projetos.js";

// Elementos
const section = document.querySelector("#projects");
const toggle = document.querySelector("#sw-checkbox");
const nav = document.querySelector("nav");

// Inicializa com projetos
window.addEventListener("load", () => {
  projetos(section);
  setupDesafioBtn();
});

// Volta ao topo ao clicar nos links de navegação
document.querySelector("#link-projetos").addEventListener("click", (e) => {
  e.preventDefault();
  projetos(section);
  section.scrollIntoView({ behavior: "smooth" });
  setupDesafioBtn();
});

document.querySelector("#link-desafios").addEventListener("click", (e) => {
  e.preventDefault();
  desafios(section);
  section.scrollIntoView({ behavior: "smooth" });
  setupVoltarProjetos();
});

// Botão "Voltar aos Projetos"
function setupVoltarProjetos() {
  setTimeout(() => {
    document
      .querySelector("#backToProjectsBtn")
      ?.addEventListener("click", () => {
        projetos(section);
        setupDesafioBtn();
      });
  }, 100);
}

// Botão de desafio
function setupDesafioBtn() {
  const btn = document.querySelector("#desafio");
  if (!btn) return;
  btn.addEventListener("click", () => {
    desafios(section);
    setupVoltarProjetos();
  });
}

// Modo claro
toggle?.addEventListener("change", () =>
  document.body.classList.toggle("light-mode")
);
