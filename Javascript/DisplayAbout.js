import {
  jsFunction,
  tsFunction,
  sassFunction,
  reactFunction,
  githubFunction,
  gitlabFunction,
  nodeFunction,
  nestFunction,
  mongoFunction,
  unityFunction,
  linuxFunction,
  vscodeFunction,
} from "./icons.js";
import MakeInputText from "./InputText.js";

const repeater = document.querySelector(".repeater");

export default function DisplayAbout() {
  repeater.appendChild(MakeInputText("page show info")); // $page show info|

  const info = document.createElement("div"); // making the info div
  info.className = "info";
  const about = document.createElement("div");
  about.className = "about";
  const name = document.createElement("h4");
  name.textContent = " 🏷️ : Aseer Uz Zaman";
  const place = document.createElement("h4");
  place.textContent = " 📍 : Bangalore, India";
  const summary = document.createElement("p");
  summary.textContent =
    "Hi! I'm a software engineer. I make responsive web applications that are functional and appealing to use. I also document my coding journey and write solutions for technical problems.";
  const techHeader = document.createElement("p");
  techHeader.textContent = " Tools I have experience with... ";

  const techLogos = document.createElement("div");
  techLogos.className = "tech-logos";

  techLogos.appendChild(jsFunction());
  techLogos.appendChild(tsFunction());
  techLogos.appendChild(reactFunction());
  techLogos.appendChild(sassFunction());
  techLogos.appendChild(githubFunction());
  techLogos.appendChild(gitlabFunction());
  techLogos.appendChild(nodeFunction());
  techLogos.appendChild(nestFunction());
  techLogos.appendChild(mongoFunction());
  techLogos.appendChild(linuxFunction());
  techLogos.appendChild(unityFunction());
  techLogos.appendChild(vscodeFunction());

  about.appendChild(name);
  about.appendChild(place);
  about.appendChild(summary);
  about.appendChild(techHeader);
  about.appendChild(techLogos);

  info.appendChild(about);

  repeater.appendChild(info);
}
