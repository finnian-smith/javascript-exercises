const palindromes = function (string) {
  let processed = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = processed.split("").reverse().join("");

  return processed == reversed;
};

// Do not edit below this line
module.exports = palindromes;
