const howTheTurnsOfTables = document.querySelector("#something");
let variable = 0;

document.addEventListener('keydown', function1);


function function1(evt) {
  for(var i = 0; i < 50; i++) {
  if (variable == 0) {
    howTheTurnsOfTables.innerHTML += "<span>" + "test" + "<span>";
    variable = 1;
  } else if (variable == 1) {
    howTheTurnsOfTables.innerHTML += "test2 or 6969"
    variable = 0; 
  }
}
}

function reset() {
  howTheTurnsOfTables.innerHTML = "6969696969696969696969";
}