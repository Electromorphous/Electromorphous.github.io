import DisplayAbout from "./DisplayAbout.js";
import DisplayProjects from "./DisplayProjects.js";
import DisplayLinks from "./DisplayLinks.js";

const repeater = document.querySelector(".repeater");

const windowScroll = () => {
  if (window.outerWidth > 1170) {
    window.scrollTo({
      top: 570,
      behavior: "smooth",
    });
  } else if (window.outerWidth <= 1170 && window.outerWidth > 769) {
    window.scrollTo({
      top: 425,
      behavior: "smooth",
    });
  } else if (window.outerWidth <= 769 && window.outerWidth > 500) {
    window.scrollTo({
      top: 345,
      behavior: "smooth",
    });
  } else if (window.outerWidth <= 500) {
    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });
  }
};

const Ask = () => {
  // "What would u like to look at", followed by the options
  const newQuestion = document.createElement("div");
  newQuestion.className = "question";
  newQuestion.textContent = "What would you like to take a look at?";
  repeater.appendChild(newQuestion);

  const options = document.createElement("div");
  options.className = "options";
  const about = document.createElement("button");
  const projects = document.createElement("button");
  const links = document.createElement("button");
  about.className = "about-button button";
  projects.className = "projects-button button";
  links.className = "links-button button";
  about.textContent = "About me";
  projects.textContent = "My projects";
  links.textContent = "Social links";
  options.appendChild(about);
  options.appendChild(projects);
  options.appendChild(links);

  repeater.appendChild(options);
};

const Prompt = () => {
  // the prompt "Aseer@Electromorphous ~"

  if (document.querySelector(".prompt")) {
    repeater.removeChild(document.querySelector(".prompt"));
  }
  if (document.querySelector(".input-text")) {
    repeater.removeChild(document.querySelector(".input-text"));
  }
  if (document.querySelector(".info")) {
    repeater.removeChild(document.querySelector(".info"));
  }
  if (document.querySelector(".footer")) {
    repeater.removeChild(document.querySelector(".footer"));
  }

  const prompt = document.createElement("div");
  prompt.className = "prompt";

  const username = document.createElement("span");
  username.className = "username";
  username.textContent = "Aseer@Electromorphous ";
  prompt.appendChild(username);
  const tilda = document.createElement("span");
  tilda.className = "tilda";
  tilda.textContent = "~";
  prompt.appendChild(tilda);

  repeater.appendChild(prompt);

  const footer = document.createElement("div");
  footer.className = "footer";
  footer.innerHTML = "Copyright <span>©</span> 2022";

  repeater.appendChild(footer);
};

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(Ask, 3000);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("about-button")) {
    window.scrollTo(0, 0);
    Prompt();
    DisplayAbout();
    setTimeout(windowScroll, 2350);
  }
  if (e.target.classList.contains("projects-button")) {
    window.scrollTo(0, 0);
    Prompt();
    DisplayProjects();
    setTimeout(windowScroll, 2150);
  }
  if (e.target.classList.contains("links-button")) {
    window.scrollTo(0, 0);
    Prompt();
    DisplayLinks();
    setTimeout(windowScroll, 2100);
  }
});
