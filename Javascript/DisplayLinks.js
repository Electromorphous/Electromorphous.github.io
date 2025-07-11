import MakeInputText from "./InputText.js";

const repeater = document.querySelector(".repeater");

const makeLink = (iconName, hyperLink) => {
  const link = document.createElement("a");
  const linkIcon = document.createElement("i");
  linkIcon.className = `${iconName} icon`;
  link.appendChild(linkIcon);
  link.target = "_blank";
  link.href = hyperLink;
  return link;
};

export default function DisplayLinks() {
  repeater.appendChild(MakeInputText("page show links")); // $page show links|

  const info = document.createElement("section"); // making the info div
  info.className = "info";
  info.setAttribute("id", "info");
  const links = document.createElement("div");
  links.className = "links";

  const mail = makeLink(
    "fa-solid fa-envelope",
    "mailto:pstation.474@gmail.com"
  );
  const github = makeLink(
    "fa-brands fa-github",
    "https://github.com/Electromorphous"
  );
  const linkedin = makeLink(
    "fa-brands fa-linkedin",
    "https://www.linkedin.com/in/aseer-uz-zaman-89a8a8187/"
  );
  const hashnode = makeLink(
    "fa-brands fa-hashnode",
    "https://electroblog.hashnode.dev/"
  );
  const dev = makeLink("fa-brands fa-dev", "https://dev.to/electromorphous/");
  // const twitter = makeLink(
  //   "fa-brands fa-twitter",
  //   "https://twitter.com/Electromorphous"
  // );
  // const youtube = makeLink("fa-brands fa-youtube", "https://youtu.be/dQw4w9WgXcQ");

  links.appendChild(mail);
  links.appendChild(github);
  links.appendChild(linkedin);
  links.appendChild(hashnode);
  links.appendChild(dev);
  // links.appendChild(twitter);
  // links.appendChild(youtube);

  info.appendChild(links);
  repeater.appendChild(info);
}
