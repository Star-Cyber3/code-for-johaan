const no = document.querySelector("#no").value;
const no2 = document.querySelector("#no");
const yes = document.querySelector("#yes");

no2.addEventListener("input", ok);

function ok() {
    yes.removeAttribute("src");
    yes.setAttribute("src", no2.value);
}