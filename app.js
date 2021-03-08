// toglogchiin eeljiig hadgalah huwisagch, 1r toglogchig 0, 2r toglogchig 1 gj temdegley
var activePlayer = 1;

//Toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];

//Toglogchiin eeljiig tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;

//shoo ali talaaraa buusniig hadgalah huwisagch. 1-6 gsn utgig sanamsargvi vvsgej ugnu
var dice = Math.floor(Math.random() * 6) + 1;

// beltgel ajil

// document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

document.querySelector("#score-1").textContent = 0;
document.querySelector("#score-0").textContent = 0;

document.querySelector("#current-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;

document.querySelector(".dice").style.display = "none";
console.log("Шоо : " + dice);
