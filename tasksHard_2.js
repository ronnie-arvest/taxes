let incomeOne = parseFloat(prompt("Введите ваш доход: "));
let taxOne = 0;

if (incomeOne <= 15000) {
  taxOne = incomeOne * 0.13;
} else if (incomeOne > 15000 && incomeOne <= 50000) {
  taxOne = 15000 * 0.13 + (incomeOne - 15000) * 0.20 ;
} else {
  tax = 15000 * 0.13 + (50000 - 15000) * 0.20 + (income - 50000) * 0.30;
}

console.log(`Сумма налога: ${taxOne.toFixed(2)} рублей`);