// const income = prompt("Введите ваш доход в рублях:");

// const incomeAmount = parseFloat(income);

// if (isNaN(incomeAmount) || incomeAmount <= 0) {
//   console.log("Некорректный ввод дохода.");
// } else {
//   let taxAmount = 0;

//   if (incomeAmount <= 15000) {
//     taxAmount = incomeAmount * 0.13;
//   } else if (incomeAmount <= 50000) {
//     taxAmount = 15000 * 0.13 + (incomeAmount - 15000) * 0.20;
//   } else {
//     taxAmount = 15000 * 0.13 + 35000 * 0.20 + (incomeAmount - 50000) * 0.30;
//   }

//   console.log(`Сумма налога: ${taxAmount.toFixed(2)} рублей.`);
// }

// const amount = prompt('Введите Ваш доход');

// if (isNaN(amount) || amount <= 0) {
//   console.log('Введены некорректные данные');
// } else {
//   let = tax = 0;

//   if (amount <= 15000) {
//     tax = amount * 0.13;
//   } else if (amount <= 50000) {
//     tax = 15000 * 0.13 + (amount - 15000) * 0.20;
//   } else {
//     tax = 15000 * 0.13 + 35000 * 0.20 + (amount - 50000) * 0.30; 
//   }

//   console.log(`Сумма налога: ${tax} рублей`);
// }

let income = parseFloat(prompt("Введите ваш доход: "));

let tax = 0;

if (income <= 15000) {
  tax = income * 0.13;
} else if (income > 15000 && income <= 50000) {
  tax = income * 0.20;
} else {
  tax = income * 0.30;
}

console.log(`Сумма налога: ${tax.toFixed(2)} рублей`);