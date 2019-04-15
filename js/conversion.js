
let weightInLb = document.getElementById("lb-text-box");
let weightInKg = document.getElementById("kg-text-box");
let weightInG = document.getElementById("g-text-box");

weightInLb.addEventListener("input", convertWeight);
weightInKg.addEventListener("input",convertWeight);
weightInG.addEventListener("input",convertWeight);

function convertWeight() {

    let source = this.id;
    let valNum = parseFloat(this.value);
    if (source=="lb-text-box") {
      weightInKg.value = valNum * 0.453592;
      weightInG.value = valNum * 453.592;
    }
    if (source=="kg-text-box") {
      weightInLb.value = valNum * 2.20462;
      weightInG.value = valNum * 1000;
    }
    if (source=="g-text-box") {
      weightInKg.value = valNum / 1000;
      weightInLb.value = valNum * 0.00220462;
    }
  }

