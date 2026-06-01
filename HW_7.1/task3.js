function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Arguments must be numbers");
  }

  if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
    throw new Error("Arguments cannot be NaN");
  }

  if (denominator === 0) {
    throw new Error("Division by zero is not possible: denominator cannot be 0");
  }

  return numerator / denominator;
}

try {
  const result1 = divide(10, 2);
  console.log("Result:", result1);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work is done");
}

try {
  const result2 = divide(7, 3);
  console.log("Result:", result2);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work is done");
}

try {
  const result3 = divide(10, 0);
  console.log("Result:", result3);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work is done");
}

try {
  const result4 = divide("10", 2);
  console.log("Result:", result4);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Work is done");
}
