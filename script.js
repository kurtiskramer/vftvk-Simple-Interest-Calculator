function updateRate()
{
var rateval = document.getElementById("rate").value;
document.getElementById("rateval").innerText=rateval;
}

function compute()
{
var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100;
var year = new Date().getFullYear()+parseInt(years);

document.getElementById("result").innerHTML="If you deposit $" + principal + ","\<br\>
 + "at an interest rate of " + rate + "%," \<br\>
 + "you will receive an amount of $" + (principal + interest) + ","\<br\>
 + "in the year " + year + "."\<br\>
}

