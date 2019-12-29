const names = ["A hole in One!", "Double Condor!", "Condor!", "Albatross!", "Eagle!", "Birdie!", "Par", "Bogey", "Double Bogey", "More Practice Required!"];

const result = document.getElementById("result");
const resultPar = document.getElementById("result-par");
const resultStroke = document.getElementById("result-stroke");
const resultBottom = document.querySelector(".result-bottom");
const resultParText = document.getElementById("result-par-text");
const resultStrokeText = document.getElementById("result-stroke-text")
const outputBox = document.getElementById("outputBox");

// Form Events
submit.addEventListener("click", calculate);

/* Grabs values from inputs, compares with a seperate function and returns the correct string from the array
   and edits the output box style with classes. */


function calculate() {

  const submit = document.getElementById("submit");
  
  let par = document.getElementById("par-input").value;
  let strokes = document.getElementById("strokes-input").value;

  function smallResults() {
    resultPar.textContent = par;
    resultStroke.textContent = strokes;
    resultParText.textContent = "PAR";
    resultStrokeText.textContent = "STROKE";
  }
  
compare(par, strokes);
smallResults();

}


// Provides us with the correct string text from the names array after comparison.
function compare(par, strokes) {
  
  if (strokes == 1) {
    result.textContent = names[0].toUpperCase();
    result.className = "holeInOne smallerFont";
    outputBox.className = "visible output";
  } else if (strokes == (par - 5)) {
    result.textContent = names[1].toUpperCase();
    result.className = "doubleCondor smallerFont";
    outputBox.className = "visible output"
  } else if (strokes == (par - 4)) {
    result.textContent = names[2].toUpperCase();
    result.className = "condor";
    outputBox.className = "visible output";
  } else if (strokes == (par - 3)) {
    result.textContent = names[3].toUpperCase();
    result.className = "albatross";
    outputBox.className = "visible output";
  } else if (strokes == (par - 2)) {
    result.textContent = names[4].toUpperCase();
    result.className = "eagle";
    outputBox.className = "visible output";
  } else if (strokes == (par - 1)) {
    result.textContent = names[5].toUpperCase();
    result.className = "birdie";
    outputBox.className = "visible output";
  } else if (strokes == par) {
    result.textContent = names[6].toUpperCase();
    result.className = "parScore";
    outputBox.className = "visible output";
  } else if (par == (strokes - 1)) {
    result.textContent = names[7].toUpperCase();
    result.className = "bogey";
    outputBox.className = "visible output";
  } else if (par == (strokes - 2)) {
    result.textContent = names[8].toUpperCase();
    result.className = "doubleBogey";
    outputBox.className = "visible output";
  } else {
    result.textContent = names[9].toUpperCase();
    console.log("why aren't you working");
    result.className = "smallerFont practice";
    outputBox.className = "visible output";
  }

}

function smallResults() {
  resultPar.textContent = par.value;
}

