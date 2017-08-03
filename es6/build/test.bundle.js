let calculateMonthlyPayment = function (principal, years, rate) {
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
    return { principal, years, rate, monthlyPayment, monthlyRate };
};

document.getElementById('calcBtn').addEventListener('click', function () {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let { monthlyRate, monthlyPayment } = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRateLbl").innerHTML = (monthlyRate * 100).toFixed(2);
    console.log(monthlyRate1);
    console.log(monthlyRate);
    console.log(calcBtn);
});

const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // shows the alert
var msg = 'something';

console.log(msg);
