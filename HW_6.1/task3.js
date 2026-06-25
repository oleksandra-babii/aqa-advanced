function checkOrder(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty';
  }
  if (available < ordered) {
    return "Your order is too large, we don't have enough goods.";
  }
  if (ordered > 0 && available >= ordered) {
    return 'Your order is accepted';
  }
  return 'Error: invalid order parameters';
}

console.log(checkOrder(100, 50));
console.log(checkOrder(5, 10));
console.log(checkOrder(10, 0));
console.log(checkOrder(10, -2));