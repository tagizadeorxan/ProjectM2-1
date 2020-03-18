let button = document.getElementById("button");
let balance = document.getElementById("balance");
button.addEventListener("click", calculate);

// .addEventListener("keypress", function (e) {
//     if (e.key === 'Enter') {
    
//     }
// });

function calculate () {
let startAmount = +document.getElementById("startAmount").value;
let monthAmount = +document.getElementById("monthAmount").value;
let depositPercent = +document.getElementById("depositPercent").value;
let time = +document.getElementById("time").value;
let result = +startAmount;

if(startAmount<0 || startAmount.length == 0) {
    document.getElementById("error").innerHTML = "❌ start amount is not correct";
   return false;
}  else if (monthAmount.length ==0 || monthAmount <0) {
    document.getElementById("error").innerHTML = "❌ month amount is not correct";
    return false;
}   
else if (depositPercent.length == 0) {
    document.getElementById("error").innerHTML = "❌ deposit percent is not correct";
    return false;
} 
else if (time.length ==0 || time<0) {
    document.getElementById("error").innerHTML = "❌ time is not correct";
    return false;
} 
  else if (depositPercent<1 || depositPercent >100) {
    document.getElementById("error").innerHTML = "❌ please write percent between 1 and 100";
   
} else {
    document.getElementById("error").innerHTML = "";
    let month = Math.abs(time/30);
    console.log(month);
    for(let i=0;i<month;i++) {
    result = result + monthAmount + result*8/100;

    } 

    document.getElementById("balance").innerHTML = Math.round(result,1);

    
}


}



//console.log(button.innerHTML);




   