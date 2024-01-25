const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";

  // array destructuring
  if (min > max) [min, max] = [max, min];

  let total = 0;
  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
