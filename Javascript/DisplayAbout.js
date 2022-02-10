import { htmlFunction, cssFunction, jsFunction, sassFunction, reactFunction, npmFunction, gitFunction, githubFunction, unityFunction, pythonFunction, flaskFunction, vscodeFunction } from './icons.js';
import MakeInputText from './InputText.js';

const repeater = document.querySelector(".repeater");

export default function DisplayAbout () {

	repeater.appendChild(MakeInputText("page show info"));						// $page show info|

	const info = document.createElement("div");								// making the info div
	info.className = "info";
	const about = document.createElement("div");
	about.className = "about";
	const name = document.createElement("h4");
	name.textContent = " 🏷️ : Aseer Uz Zaman";
	const place = document.createElement("h4");
	place.textContent = " 📍 : Bangalore, India";
	const summary = document.createElement("p");
	summary.textContent = "Hi! I'm a 21yo CS engineering student, learning web development and making responsive web pages and web apps. I'm looking for freelance projects, internships and junior dev jobs to build professional work experience.";
	const techHeader = document.createElement("p");
	techHeader.textContent = " Tools I have experience with... ";

	const techLogos = document.createElement("div");
	techLogos.className = "tech-logos";

	techLogos.appendChild(htmlFunction());
	techLogos.appendChild(cssFunction());
	techLogos.appendChild(jsFunction());
	techLogos.appendChild(sassFunction());
	techLogos.appendChild(reactFunction());
	techLogos.appendChild(npmFunction());
	techLogos.appendChild(gitFunction());
	techLogos.appendChild(githubFunction());
	techLogos.appendChild(unityFunction());
	techLogos.appendChild(pythonFunction());
	techLogos.appendChild(flaskFunction());
	techLogos.appendChild(vscodeFunction());

	about.appendChild(name);
	about.appendChild(place);
	about.appendChild(summary);
	about.appendChild(techHeader);
	about.appendChild(techLogos);

	info.appendChild(about);

	repeater.appendChild(info);
}
