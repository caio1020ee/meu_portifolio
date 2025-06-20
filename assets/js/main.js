import { desafios } from "./desafios.js";
import { projetos } from "./projetos.js";

const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const projectsSection = document.querySelector("#projects .wrapper");

const notebook_1 = document.querySelector("#notebook-1");
const notebook_2 = document.querySelector("#notebook-2");
const notebook_2_white = document.querySelector("#notebook-2-white");
const vidro = document.querySelector("#vidro");

const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const knowledge = document.querySelector("#knowledge");
const contact = document.querySelector("#contact");

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(projects);
  activateMenuAtCurrentSection(knowledge);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  if (!section) return;

  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  if (menuElement) {
    menuElement.classList.remove("active");
    if (sectionBoundaries) {
      menuElement.classList.add("active");
    }
  }
}

function showNavOnScroll() {
  navigation.classList.toggle("scroll", scrollY > 0);
}

function showBackToTopButtonOnScroll() {
  backToTopButton.classList.toggle("show", scrollY > 550);
}

function openMenu() {
  document.querySelectorAll(".open").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

function closeMenu() {
  document.querySelectorAll(".close").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

function handleDesafioBtn() {
  const desafioBtn = document.querySelector("#desafio");
  if (!desafioBtn) return;

  desafioBtn.addEventListener("click", () => {
    desafios(projectsSection);
    setTimeout(() => {
      const backBtn = document.querySelector("#backToProjectsBtn");
      if (backBtn) {
        backBtn.addEventListener("click", () => {
          projetos(projectsSection);
          handleDesafioBtn();
        });
      }
    }, 100);
  });
}

window.addEventListener("load", () => {
  projetos(projectsSection);
  handleDesafioBtn();
});

window.addEventListener("scroll", onScroll);

setTimeout(() => {
  if (notebook_1) notebook_1.style.opacity = 0;

  [notebook_1, notebook_2, notebook_2_white, vidro].forEach((el) => {
    if (el) el.style.animation = "none";
  });
}, 4000);

openMenu();
closeMenu();

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
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

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
