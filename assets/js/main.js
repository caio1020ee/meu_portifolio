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

window.addEventListener("load", function begin() {
  if (projectsSection) {
    projetos(projectsSection);
  }
  const desafioBtn = document.querySelector("#desafio");
  if (desafioBtn) {
    desafioBtn.addEventListener("click", () => {
      if (projectsSection) {
        desafios(projectsSection);
      }
      document
        .querySelector("#backToProjectsBtn")
        ?.addEventListener("click", begin);
    });
  }

  setTimeout(() => {
    if (notebook_1) notebook_1.style.opacity = 0;
    if (notebook_1) notebook_1.style.animation = "none";
    if (notebook_2) notebook_2.style.animation = "none";
    if (notebook_2_white) notebook_2_white.style.animation = "none";
    if (vidro) vidro.style.animation = "none";
  }, 4000);
});

window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  if (about) activateMenuAtCurrentSection(about);
  if (projects) activateMenuAtCurrentSection(projects);
  if (knowledge) activateMenuAtCurrentSection(knowledge);
  if (contact) activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
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
  if (scrollY > 0) {
    navigation?.classList.add("scroll");
  } else {
    navigation?.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton?.classList.add("show");
  } else {
    backToTopButton?.classList.remove("show");
  }
}

function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

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

toggle?.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
