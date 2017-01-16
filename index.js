
  // monthly interest rate       
function calculator() {
// created variables get value from html inputs
    var loanBalance = document.getElementById('loanBalance').value;

    var interestRate = document.getElementById('interestRate').value;

    var loanTerms = document.getElementById('loanTerms').value;

    var period = document.getElementById('Period');

    var periodValue = period.options[period.selectedIndex].text;

    var monthlyInterestRate = (interestRate / 100) / periodValue;


    // number of payments
    var numberOfPayments = loanTerms * periodValue;

    // compounded interest rate
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);  

    // interest quotient
    var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    // final calculation
    var monthlyPayment = loanBalance * interestQuotient;
// on click fired off entire function. took final calculation inserted into the p tag
    document.getElementById("answer").innerHTML = (monthlyPayment);
}
// code reviewed by TR & SS