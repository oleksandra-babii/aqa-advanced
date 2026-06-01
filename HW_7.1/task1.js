function handleNum(num, onEven, onOdd) {
  if (
    typeof num !== "number" ||
    Number.isNaN(num) ||
    !Number.isFinite(num) ||
    !Number.isInteger(num)
  ) {
    handleInvalid();
    return;
  }

  if (num === 0) {
    handleZero();
    return;
  }

  if (num % 2 === 0) {
    onEven();
  } else {
    onOdd();
  }
}

function handleEven() {
  console.log("number is even");
}

function handleOdd() {
  console.log("number is odd");
}

function handleZero() {
  console.log("number is zero");
}

function handleInvalid() {
  console.log("invalid number");
}

handleNum(-74.0, handleEven, handleOdd);
