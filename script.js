let button = document.getElementById("calculate-button");
let balance = document.getElementById("balance");
button.addEventListener("click", calculate);

// .addEventListener("keypress", function (e) {
//     if (e.key === 'Enter') {

//     }
// });

function showError(text) {
    document.getElementById("error").innerHTML = text;
}

function calculate() {
  let startAmount = +document.getElementById("startAmount").value;
  let monthAmount = +document.getElementById("monthAmount").value;
  let depositPercent = +document.getElementById("depositPercent").value;
  let time = +document.getElementById("time").value;
  let result = +startAmount;

  if (startAmount <= 0  ) {
      showError("❌ start amount is not correct");
    return NaN;
  } else if (monthAmount < 0) {
     showError("❌ month amount is not correct");
    return NaN;
  } else if (time <= 0) {
    showError("❌ time is not correct");
    return NaN;
  } else if (depositPercent < 1 || depositPercent > 100) {
    document.getElementById("error").innerHTML =
      showError("❌ please write percent between 1 and 100");
  } else {
    showError("");
    let month = Math.trunc(time / 30);
    
    for (let i = 0; i < month; i++) {
      result =
        result + monthAmount + ((result + monthAmount) * depositPercent) / 100;
    }

    document.getElementById("balance").innerHTML =
      "Future value will be: " + result;
      alert(result);
  }
}

