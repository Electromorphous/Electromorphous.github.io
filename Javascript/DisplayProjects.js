import MakeInputText from "./InputText.js";

const repeater = document.querySelector(".repeater");

const makeProject = (
  headerText,
  sourceCodeLink,
  descriptionText,
  projectText,
  projectLink,
  demoText,
  demoLink
) => {
  const projectInfo = document.createElement("div");
  projectInfo.className = "project";

  const header = document.createElement("h1");
  header.textContent = headerText;
  projectInfo.appendChild(header);

  if (demoText && demoLink) {
    const demo = document.createElement("h2");
    const demoLinkTag = document.createElement("a");
    demoLinkTag.target = "_blank";
    demoLinkTag.href = demoLink;
    demoLinkTag.textContent = demoText;
    demo.appendChild(demoLinkTag);
    projectInfo.appendChild(demo);
  }

  if (projectText && projectLink) {
    const project = document.createElement("h2");
    const projectLinkTag = document.createElement("a");
    projectLinkTag.target = "_blank";
    projectLinkTag.href = projectLink;
    projectLinkTag.textContent = projectText;
    project.appendChild(projectLinkTag);
    projectInfo.appendChild(project);
  }

  const sourceCode = document.createElement("h2");
  const sourceCodeLinkTag = document.createElement("a");
  sourceCodeLinkTag.target = "_blank";
  sourceCodeLinkTag.href = sourceCodeLink;
  sourceCodeLinkTag.textContent = "Source code";
  sourceCode.appendChild(sourceCodeLinkTag);
  projectInfo.appendChild(sourceCode);

  const description = document.createElement("p");
  description.innerHTML = descriptionText;
  projectInfo.appendChild(description);

  return projectInfo;
};

export default function DisplayProjects() {
  repeater.appendChild(MakeInputText("page show projects"));

  const info = document.createElement("section");
  info.className = "info";
  info.setAttribute("id", "info");
  const projects = document.createElement("div");
  projects.className = "projects";

  projects.appendChild(
    makeProject(
      "DeNotes",
      "https://github.com/Electromorphous/DeNotes",
      "World's first fully decentralized note-taking app. Powered by the <a href='https://ipfs.io' target='_blank'>Inter Planetary File System</a> and <a href='https://portal.thirdweb.com/storage' target='_blank'>ThirdWeb</a>.",
      "View app",
      "https://denotes.vercel.app"
    )
  );

  projects.appendChild(
    makeProject(
      "CustomWheels",
      "https://github.com/Electromorphous/CustomWheels",
      "A Web application that lets you view and customise 3D models of cars. Made using <a href='https://threejs.org/' target='_blank'>Three.js</a> and <a href='https://www.npmjs.com/package/@react-three/fiber' target='_blank'>react-three</a>.",
      "View app",
      "https://electromorphous.github.io/CustomWheels"
    )
  );

  projects.appendChild(
    makeProject(
      "Pokédex",
      "https://github.com/Electromorphous/Pokedex",
      "A Pokédex made using the <a href='https://pokeapi.co/' target='_blank'>PokéApi</a>.",
      "View app",
      "https://electromorphous.github.io/Pokedex"
    )
  );

  projects.appendChild(
    makeProject(
      "Countries",
      "https://github.com/Electromorphous/Countries",
      "A WebApp made using the <a href='https://restcountries.com/' target='_blank'>REST Countries API</a>.",
      "View app",
      "https://electromorphous.github.io/Countries"
    )
  );

  projects.appendChild(
    makeProject(
      "ShootLasers",
      "https://github.com/Electromorphous/SpaceShooter",
      "A space-shooter game made in Unity using C#.",
      "Play on itch.io",
      "https://electromorphous.itch.io/shoot-lasers",
      "Play now in the browser!",
      "../ShootLasers/index.html"
    )
  );

  projects.appendChild(
    makeProject(
      "FlaskUnityApp",
      "https://github.com/Electromorphous/FlaskUnityApp",
      "A web app made in python and flask that takes Unity WebGL build folders which are compressed to zip files, extracts them and plays the game in the browser."
    )
  );

  info.appendChild(projects);
  repeater.appendChild(info);
}
