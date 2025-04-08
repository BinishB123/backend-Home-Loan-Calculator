function emiCalculator(prinicpleAmount,annualRate, years) {
  const r = annualRate / 12 / 100; 
  const n = years * 12; 
  const emi = (prinicpleAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalAmountPayable = emi * n;
  const totalInterest = totalAmountPayable - prinicpleAmount;
  return {
    emi: emi.toFixed(2),
    interestAmount: totalInterest.toFixed(2),
    totalPayable: totalAmountPayable.toFixed(2),
    
  };
}

export default emiCalculator
