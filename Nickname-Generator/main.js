// Caught Speeding CS10 Review

// Variables to store HTML Elements
let randombutt = document.getElementById("rannick");
let allbutt = document.getElementById("allnick");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let name = document.getElementById("name");

let words = ["Toe Curler", "the Coder", "the Sloth", "Mcchicken","the Parapelegic","the Potatoe"];
// Add Event Listener to Calculate Button
randombutt.addEventListener("click", ranBtnClicked);


function ranBtnClicked() {
  let ranlistnumb = Math.floor(Math.random() * 6);
  name.innerHTML = firstname.value + ' ' + '"' + words[ranlistnumb] + '"' + ' ' + lastname.value;
}
allbutt.addEventListener("click", allBtnClicked);

function allBtnClicked() {
  let t = "";
  for (let i = 0; i < 6; i++) {
    t += firstname.value + ' ' + '"' + words[i] + '"' + ' ' + lastname.value + " <br> ";
  }
  name.innerHTML = t;
 }