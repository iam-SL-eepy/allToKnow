let calculateMonthlyPayment = function (principal, years, rate) {
    let monthlyRate1 = 0;
    if (rate) {
        monthlyRate1 = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate1 / (1 - Math.pow(1 / (1 + monthlyRate1), years * 12));
    return { principal, monthlyRate1 };
};

document.getElementById('calcBtn').addEventListener('click', function () {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let { monthlyPayment, monthlyRate1 } = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRateLbl").innerHTML = (monthlyRate1 * 100).toFixed(2);
    console.log(monthlyRate1);
    console.log(monthlyRate);
    console.log(calcBtn);
});
var msg = 'something';

console.log(msg);
