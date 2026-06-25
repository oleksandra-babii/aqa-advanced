function rectangleAreaDeclaration(width, height) {
  return width * height;
}
console.log('Function declaration:', rectangleAreaDeclaration(8, 9));

const rectangleAreaExpression = function (width, height) {
  return width * height;
};
console.log('Function expression:', rectangleAreaExpression(8, 9));

const rectangleAreaArrow = (width, height) => width * height;
console.log('Arrow function:', rectangleAreaArrow(8, 9));
