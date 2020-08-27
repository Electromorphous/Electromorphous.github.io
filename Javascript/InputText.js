const MakeDollarSign = () => {
	const dollarSign = document.createElement("div");
	dollarSign.className = "dollar-sign";
	dollarSign.textContent = "$";
	return dollarSign;
}

const MakeBlinker = () => {
	const blinkerParent = document.createElement("div");
	blinkerParent.className = "blinker-parent";
	const blinker = document.createElement("div");
	blinker.className = "blinker";
	blinker.textContent = "`";
	blinkerParent.appendChild(blinker);
	return blinkerParent;
}

export default function MakeInputText(command) {				// making the input text... "$ page show ..."|
	const wordArray = command.split(" ");
	const lastWord = wordArray[wordArray.length - 1];

	const inputText = document.createElement("div");
	inputText.className = "input-text";
	const text = document.createElement("p");
	text.className = `text-${lastWord}`;
	text.textContent = command;
	inputText.appendChild(MakeDollarSign());
	inputText.appendChild(text);
	inputText.appendChild(MakeBlinker());
	return inputText;
}
