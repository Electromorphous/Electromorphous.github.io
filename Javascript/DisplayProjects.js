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
  description.textContent = descriptionText;
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
      "NotShopify",
      "https://github.com/Electromorphous/NotShopify",
      "A mockup of the Shopify landing page, made using HTML, Sass and nothing more than 10 lines of Javascript.",
      "Real website",
      "https://shopify.com/free-trial",
      "View mockup page",
      "https://electromorphous.github.io/NotShopify/"
    )
  );
  projects.appendChild(
    makeProject(
      "ShootLasers",
      "https://github.com/Electromorphous/SpaceShooter",
      "A space-shooter game made in Unity using C#. This was only made to gain some experience in Unity, not necessarily for games.",
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
