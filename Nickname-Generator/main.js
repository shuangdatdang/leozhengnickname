// Caught Speeding CS10 Review

// Variables to store HTML Elements
let randombutt = document.getElementById("rannick");
let allbutt = document.getElementById("allnick");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let name = document.getElementById("name");
let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let name3 = document.getElementById("name3");
let name4 = document.getElementById("name4");
let name5 = document.getElementById("name5");

let words = ["Toe Curler", "the Coder", "the Sloth", "Mcchicken","the Parapelegic","the Potatoe"];
// Add Event Listener to Calculate Button
randombutt.addEventListener("click", ranBtnClicked);


function ranBtnClicked() {
  let ranlistnumb = Math.floor(Math.random() * 6);
  name.innerHTML = firstname.value + ' ' +'"' + words[ranlistnumb] +'"' + ' ' + lastname.value;
  name1.innerHTML = ' '
  name2.innerHTML = ' '
  name3.innerHTML = ' '
  name4.innerHTML = ' '
  name5.innerHTML = ' '
}   
allbutt.addEventListener("click", allBtnClicked);

function allBtnClicked() {
  name.innerHTML = firstname.value + ' ' + '"' + words[0] +'"' + ' ' + lastname.value;
  name1.innerHTML = firstname.value + ' ' + '"' +words[1] +'"' + ' ' + lastname.value;
  name2.innerHTML = firstname.value + ' ' + '"' +words[2] +'"' + ' ' + lastname.value;
  name3.innerHTML = firstname.value + ' ' + '"' +words[3] +'"' + ' ' + lastname.value;
  name4.innerHTML = firstname.value + ' ' + '"' +words[4] +'"' + ' ' + lastname.value;
  name5.innerHTML = firstname.value + ' ' + '"' +words[5] + '"' +' ' + lastname.value;
}