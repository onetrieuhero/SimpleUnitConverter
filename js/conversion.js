
let weightInLb = document.getElementById("lb-text-box");
let weightInKg = document.getElementById("kg-text-box");
let weightInG = document.getElementById("g-text-box");

weightInLb.addEventListener("input", convertWeight);
weightInKg.addEventListener("input",convertWeight);
weightInG.addEventListener("input",convertWeight);

let tempInF = document.getElementById("fahrenheit-text-box");
let tempInC = document.getElementById("celsius-text-box");

tempInC.addEventListener("input", convertTemp);
tempInF.addEventListener("input", convertTemp);


let distInMiles = document.getElementById("miles-text-box");
let distInKilos = document.getElementById("kilo-text-box");
let distInMeters = document.getElementById("meters-text-box");
let distInCenti = document.getElementById("centi-text-box");
let distInMilli = document.getElementById("milli-text-box");

distInMiles.addEventListener("input", convertDist);
distInKilos.addEventListener("input", convertDist);
distInMeters.addEventListener("input", convertDist);
distInCenti.addEventListener("input", convertDist);
distInMilli.addEventListener("input", convertDist);

function convertDist(){
  let source = this.id;
  let valNum = parseFloat(this.value);

  if(source == "miles-text-box"){
    distInKilos.value = (valNum * 1.60934).toFixed(8);
    distInMeters.value = (valNum * 1609.34).toFixed(8);
    distInCenti.value = (valNum * 160934).toFixed(8);
    distInMilli.value = (valNum * 1609340).toFixed(8);
  }

  if(source == "kilo-text-box"){
    distInMiles.value = (valNum / 1.60934).toFixed(8);
    distInMeters.value= (valNum * 1000).toFixed(8);
    distInCenti.value= (valNum * 100000).toFixed(8);
    distInMilli.value= (valNum * 1000000).toFixed(8);
  }

  if(source == "meters-text-box"){
    distInMiles.value = (valNum / 1609.344).toFixed(8);
    distInKilos.value = (valNum / 1000).toFixed(8);
    distInCenti.value = (valNum * 100).toFixed(8);
    distInMilli.value = (valNum * 1000).toFixed(8);
  }

  if(source == "centi-text-box"){
    distInMiles.value = (valNum / 160934.4).toFixed(8);
    distInKilos.value = (valNum / 100000).toFixed(8);
    distInMeters.value = (valNum / 100).toFixed(8);
    distInMilli.value = (valNum * 10).toFixed(8);
  }

  if(source == "milli-text-box"){
    distInMiles.value = (valNum / 1.609e+6).toFixed(8);
    distInKilos.value = (valNum / 1000000).toFixed(8);
    distInMeters.value = (valNum / 1000).toFixed(8);
    distInCenti.value = (valNum / 10).toFixed(8);
  }

}


function convertTemp(){
  let source = this.id;
  let valNum = parseFloat(this.value);

  if(source == "fahrenheit-text-box"){
    tempInC.value = ((valNum - 32) * 5/9).toFixed(4);
  }

  if(source == "celsius-text-box"){
    tempInF.value = ((valNum * 9/5) + 32).toFixed(4);
  }
}

function convertWeight() {

    let source = this.id;
    let valNum = parseFloat(this.value);
    if (source=="lb-text-box") {
      weightInKg.value = (valNum / 2.20462).toFixed(4);
      weightInG.value = (valNum * 453.592).toFixed(4);
    }

    if (source=="kg-text-box") {
      weightInLb.value = (valNum * 2.20462).toFixed(4);
      weightInG.value = (valNum * 1000).toFixed(4);
    }

    if (source=="g-text-box") {
      weightInKg.value = (valNum / 1000).toFixed(4);
      weightInLb.value = (valNum * 0.00220462).toFixed(4);
    }
  }

