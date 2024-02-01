const fibonacci = function (num) {
  if (typeof num === "string") {
    num = parseInt(num);
  }

  if (num == 0) {
    return 0;
  } else if (num < 0) {
    return "OOPS";
  }
  // Logic ->
  // first = n - 2 , second = n - 1

  // current = 0 + 1
  // first = second
  // second = current

  let first = 0;
  let second = 1;

  for (let i = 2; i <= num; i++) {
    let current = first + second;
    first = second;
    second = current;
  }

  return second;
};

// Do not edit below this line
module.exports = fibonacci;
