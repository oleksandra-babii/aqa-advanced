const number = 5;

if (typeof number !== 'number' || Number.isNaN(number)){
  console.log('Помилка: введіть коректне число');
} else if (number <= 0) {
  console.log('Помилка: число має бути більшим за 0)');
} else if (number > 10) {
  console.log('Помилка: число має бути меншим за 11');
} else {
  // Cycle for
  console.log('Таблиця множення (цикл for):');
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }

  // Cycle while
  console.log('Таблиця множення (цикл while):');
  let j = 1;
  while (j <= 10) {
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
  }
}