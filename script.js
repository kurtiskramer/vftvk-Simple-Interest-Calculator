function compute() {
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;
var year = new Date().getFullYear()+parseInt(years);
document.getElementById("result").innerHTML="If you deposit $" + principal + ","\<br\>
 + "at an interest rate of " + rate + "%," \<br\>
 + "you will receive an amount of $" + (principal + interest) + ","\<br\>
 + "in the year " + year + "."\<br\>;
}


function updateRate() {
var rateval = document.getElementById("rate");
document.getElementById("rate_val").innerHTML = rateval;
}


function validatePrincipal() {
    let x = document.getElementById("principal").value;
    if (x <= 0) {
      alert("Enter a positive number.");
      return false;
    }
  }
