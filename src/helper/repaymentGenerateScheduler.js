function generateSchedule(loanAmount,intrest , years) {
  console.log(loanAmount,intrest , years);
  
  const schedule = [];
  const numberOfMonths = years * 12;
  const monthlyRate = intrest / 12 / 100;

  const emi =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

  let remainingBalance = loanAmount;

  for (let month = 1; month <= numberOfMonths; month++) {
    const interestPaid = remainingBalance * monthlyRate;
    const principalPaid = emi - interestPaid;
    remainingBalance -= principalPaid;

    schedule.push({
      month,
      principalPaid: principalPaid.toFixed(2),
      interestPaid: interestPaid.toFixed(2),
      totalEMI: emi.toFixed(2),
      remainingBalance:remainingBalance > 0 ? remainingBalance.toFixed(2) : "0.00",
    });
  }

  return schedule;
}


export default generateSchedule