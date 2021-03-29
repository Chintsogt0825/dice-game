// toglogchiin eeljiig hadgalah huwisagch, 1r toglogchig 0, 2r toglogchig 1 gj temdegley
var activePlayer = 0;

//Toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores = [0, 0];

//Toglogchiin eeljiig tsugluulj baigaa onoog hadgalah huwisagch
var roundScore = 0;

//shoo ali talaaraa buusniig hadgalah huwisagch. 1-6 gsn utgig sanamsargvi vvsgej ugnu

//programm ehlehed beltgey
document.getElementById("score-1").textContent = "0";
document.getElementById("score-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("current-0").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1 - 6 dotorh sanamsargui neg too gargaj awna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // shoonii zurgiig web deer gargaj irne
  diceDom.style.display = "block";

  // buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Buusan too n 1 ees ylgaatai bol idewhtei toglogchiin eeljiin toog nemegduulne
  if (diceNumber !== 1) {
    // 1-ees ylgaatai too buulaa. buusan toog toglogchid nemj ugnu.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    ////// 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.
    // ene toglogchiin eeljendee tsugluulsan onoog 0 bolgono.
    switchToNextPlayer();
  }
});

// Hold towchnii event listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // ug toglogchiin tsugluulsan eeljnii onoog global onoon deer n nemj ugnu

  // if(activePlayer === 0) {
  //   scores[0] = scores[0] + roundScore;
  // } else {
  //   scores[1] = scores[1] + roundScore;
  // }

  scores[activePlayer] = scores[activePlayer] + roundScore;

  // delgets deer onoog n uurchilnu
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  // ug toglogch hojson esehiig (onoo n 100-s ih eseh) shalgah
  if (scores[activePlayer] >= 100) {
    // ylagch gesen textiig nerniih n orond gargana
    document.getElementById("name-" + activePlayer).textContent = "Winner!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // toglogchiin eeljiig solino.
    switchToNextPlayer();
  }
});

///// ene funkts n togloh eeljiig daraachiin toglogch ruu shiljuulne
function switchToNextPlayer() {
  // ene toglogchiin eeljendee tsugluulsan onoog 0 bolgono.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // toglogchiin eeljig ngu toglogch ruu shiljuulne

  // if(activePlayer){
  //   activePlayer = 1;
  // } else {
  //   activePlayer = 0;
  // }
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // ulaan tsegiig shiljuuleh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // shoog tur alga bolgono.
  diceDom.style.display = "none";
}
