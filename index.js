  // monthly interest rate       
    monthlyInterestRate = (interestRate / 100) / period          

    // number of payments
    numberOfPayments = loanTerm * period

    // compounded interest rate
    compoundedIntestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)  

    // interest quotient
    interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedIntestRate - 1)

    // final calculation
    monthlyPayment = loanBalance * interestQuotient;