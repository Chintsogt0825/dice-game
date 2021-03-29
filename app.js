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
  if(diceNumber !== 1){
    // 1-ees ylgaatai too buulaa. buusan toog toglogchid nemj ugnu.
    roundScore = roundScore + diceNumber ;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu.

    // ene toglogchiin eeljendee tsugluulsan onoog 0 bolgono.
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;

    // toglogchiin eeljig ngu toglogch ruu shiljuulne
    // herew idewhtei toglogch n 0 baiwal idehwtei toglogchiig 1 bolgo
    // ugui bol idewhtei toglogch n 0 bolgo.

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // ulaan tsegiig shiljuuleh 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // shoog tur alga bolgono.
    diceDom.style.display = 'none';

    // if(activePlayer){
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }

  }
});
