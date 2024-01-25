const removeFromArray = function (values, ...args) {
  return values.filter((element) => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
