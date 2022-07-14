import SPData from "../model/data.js";
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn");
const showbox = document.getElementById("showbox");
const incorrectBlock = document.getElementById("incorrect");
const lineOrderBlock = document.getElementById("line-order");
const orText = document.getElementById("or-text");
const detailBox = document.getElementById("detailbox");

let found = false;
let name = "";

submitBtn.addEventListener("click", () => {
	submit();
});

input.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		event.preventDefault();
		submit();
	}
});
function submit() {
	if (document.getElementById("image")) {
		document.getElementById("image").remove();
	}

	SPData.forEach((e) => {
		if (e.employee_id == input.value) {
			console.log(`${e.employee_nickname_thai}_${e.employee_id}.png`);

			showbox.style.display = "block";
			incorrectBlock.style.display = "none";
			lineOrderBlock.style.display = "none";
			orText.style.display = "none";
			showbox.style.display = "block";
			detailBox.style.display = "block";
			name = e.employee_nickname_thai;
			found = true;
			detailBox.insertAdjacentHTML(
				"afterend",
				` <img class ='image' id='image' src='../Images/${e.employee_nickname_thai}_${e.employee_id}.png' height =450px width=450px>`
			);
			if (found) return;
		}
	});
	if (!found) {
		detailBox.style.display = "none";
		showbox.style.display = "block";
		incorrectBlock.style.display = "block";
		lineOrderBlock.style.display = "block";
		orText.style.display = "block";
	}
	found = false;
}
